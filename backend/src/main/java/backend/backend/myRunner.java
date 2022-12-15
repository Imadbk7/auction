package backend.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Component
public class myRunner implements CommandLineRunner {
  @Autowired
  private OffersRepositoryJpa offersRepositoryJpa;

  @Autowired
  private bidrepo bidrepo;

  @Transactional
  @Override
  public void run(String... args) throws Exception {
    System.out.println("Running CommandLine Startup");
    this.createInitialOffers();
  }

  private void createInitialOffers() {
    List<OffersModel> offers = this.offersRepositoryJpa.getAll();

    if (offers.size() > 0) return;
    System.out.println("Configuring some initial offer data");

    for (int i = 0; i < 9; i++) {
      OffersModel offersModel = offersRepositoryJpa.getRandomOffer();
      Bid bid = new Bid();
      bid.id = offersModel.id;
      bid.value = offersModel.valueHighestBid;
      bid.setOffersModel(offersModel);
      this.offersRepositoryJpa.save(offersModel);
      this.bidrepo.save(bid);
      System.out.println(bid.id + "dit is de id");
      System.out.println(offersModel.id + "dit is de id");
    }
  }



}
