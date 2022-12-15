package backend.backend;

import backend.backend.Exception.PreConditionFailedException;
import backend.backend.helpers.DataView;
import com.fasterxml.jackson.annotation.JsonView;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/offers")
public class OffersController {

  @Autowired
  private OffersRepoMock offersRepo;

  @Autowired
  private OffersRepositoryJpa offersRepositoryJpa;

  @GetMapping()
  public ArrayList<OffersModel> offers(@RequestParam(value = "title", required = false) String title,
                                       @RequestParam(value = "status", required = false) String status,
                                       @RequestParam(value = "minBidValue", required = false) Double minBidValue) {

    if ((title != null && status != null) || (status != null && minBidValue != null) || (title != null && minBidValue != null)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can handle only one request parameter, title=, status=, minBidValue=");
    }
    if (title != null) {
      return offersRepositoryJpa.findByQuery("offer_find_by_title", title);
    }
    if (status != null) {
      if (!status.equals(Status.CLOSED.name()) && !status.equals(Status.PAID.name()) && !status.equals(Status.SOLD.name()) && !status.equals(Status.FORSALE.name()) && !status.equals(Status.NEW.name())) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "status= " + status + " is not a valid offer status value");
      } else return offersRepositoryJpa.findByQuery("offer_find_by_status", Status.valueOf(status));
    }
    if (minBidValue != null) {
      offersRepositoryJpa.findByQuery("offer_find_by_minBidValue", minBidValue);
    }
    return offersRepositoryJpa.getAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<OffersModel> getFakeOffer(@PathVariable int id) {
    OffersModel offersModel = offersRepo.findOneById(id);

    if (offersModel == null) {
      throw new ResourceNotFoundException("Offer id " + id + " doesn't exist.");
    }
    return ResponseEntity.ok(offersModel);
  }

  @DeleteMapping("/{id}")
  public boolean deleteOne(@PathVariable int id) {
    OffersModel offer = offersRepo.findOneById(id);

    if (offer == null) {
      throw new ResourceNotFoundException("Offer id " + id + " doesn't exist.");
    } else {
      return offersRepo.deleteOne(id);
    }
  }

  @GetMapping("/getAllBids")
  public ArrayList<Bid> getAllBids(){
    return this.offersRepositoryJpa.getAllBids();
  }

  @PostMapping()
  public ResponseEntity<OffersModel> save(@RequestBody OffersModel offersModel) {
    OffersModel saveoffer = this.offersRepo.save(offersModel);

    URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saveoffer.id).toUri();

    return ResponseEntity.created(location).body(saveoffer);
  }

  @PutMapping("/{id}")
  public void edit(@RequestBody OffersModel offersModel, @PathVariable int id) {
    if (id != offersModel.id) {
      throw new PreConditionFailedException("id do not match");
    }

    OffersModel newoffermodel = this.offersRepo.findOneById(id);
    newoffermodel.id = offersModel.id;
    newoffermodel.date = offersModel.date;
    newoffermodel.description = offersModel.description;
    newoffermodel.status = offersModel.status;
    newoffermodel.valueHighestBid = offersModel.valueHighestBid;
    newoffermodel.title = offersModel.title;
    this.offersRepo.edit(newoffermodel);
  }

  @JsonView(DataView.DynamicFilter.class)
  @GetMapping(value = "/summary")
  public List<OffersModel> getSummary() {
    return this.offersRepo.getAll();
  }

  @GetMapping("/createFakeOffer")
  public void createFakeOffer() {
    this.offersRepo.createFakeOffers();
  }

  @PostMapping("/{id}/bid")
  public void newbid(@PathVariable int id, @RequestBody Bid bid) {
    this.offersRepositoryJpa.newBid(id, bid);
  }

}
