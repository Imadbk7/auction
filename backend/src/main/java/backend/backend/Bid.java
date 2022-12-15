package backend.backend;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Bid {

  @JsonBackReference
  @ManyToOne
  public OffersModel offers;
  @Id
  public int id;
  public double value;

  public Bid() {
  }

  public void setOffersModel(OffersModel offersModel) {
    this.offers = offersModel;
  }

}
