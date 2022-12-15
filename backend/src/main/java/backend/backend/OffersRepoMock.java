package backend.backend;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class OffersRepoMock implements OffersRepo {
  public ArrayList<OffersModel> arrayList = new ArrayList<>();

  public OffersRepoMock() {
    for (int i = 0; i < 7; i++) {
      this.createFakeOffers();
    }
  }

  @Override
  public OffersModel findOneById(int id) {
    OffersModel offersModel = null;
    for (int i = 0; i < this.arrayList.size(); i++) {
      if (this.arrayList.get(i).id == id) {
        offersModel = this.arrayList.get(i);
      } else {

      }
    }
    return offersModel;
  }

  @Override
  public boolean deleteOne(int id) {
    for (int i = 0; i < this.arrayList.size(); i++) {
      if (id == this.arrayList.get(i).id) {
        this.arrayList.remove(i);
        return true;
      }
    }
    return false;
  }

  public void createFakeOffers() {
    OffersModel offersModel = new OffersModel();
    offersModel.id = OffersModel.nextId++;
    offersModel.title = "offer " + offersModel.id;
    offersModel.valueHighestBid = 5.88 + offersModel.id;
    offersModel.status = OffersModel.VALUES.get((int) Math.round(Math.random() * 4));
    offersModel.description = "" + offersModel.id;
    offersModel.date = "" + offersModel.id;

    this.arrayList.add(offersModel);
  }

  public OffersModel getRandomOffer() {
    OffersModel offersModel = new OffersModel();
    offersModel.id = OffersModel.nextId++;
    offersModel.title = "Offer " + offersModel.id;
    offersModel.valueHighestBid = 5.88 + offersModel.id;
    offersModel.status = OffersModel.VALUES.get((int) Math.round(Math.random() * 4));
    offersModel.description = "" + offersModel.id;
    offersModel.date = "" + offersModel.id;

    this.arrayList.add(offersModel);
    return offersModel;
  }

  @Override
  public void edit(OffersModel offersModel) {
    for (int i = 0; i < this.arrayList.size(); i++) {
      if (this.arrayList.get(i).id == offersModel.id) {
        this.arrayList.get(i).date = offersModel.date;
        this.arrayList.get(i).description = offersModel.description;
        this.arrayList.get(i).status = offersModel.status;
        this.arrayList.get(i).valueHighestBid = offersModel.valueHighestBid;
        this.arrayList.get(i).title = offersModel.title;
      }
    }
  }

  public OffersModel save(OffersModel offersModel) {
    if (offersModel.id == 0) {
      offersModel.id = OffersModel.nextId++;
      this.arrayList.add(offersModel);
    } else {
      this.arrayList.add(offersModel);
    }
      return offersModel;
  }

  @Override
  public ArrayList<OffersModel> getAll() {
    return this.arrayList;
  }

  @Override
  public ArrayList<OffersModel> findByQuery(String jpqlNAme, Object... params) {
    return null;
  }

}
