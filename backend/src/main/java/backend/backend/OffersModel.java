package backend.backend;

import backend.backend.helpers.DataView;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

enum Status {
  SOLD,
  FORSALE,
  NEW,
  PAID,
  CLOSED
}

@Entity(name = "OffersModel")
@NamedQueries({
        @NamedQuery(name = "offer_find_by_status", query = "SELECT o FROM OffersModel o WHERE o.status = ?1"),
        @NamedQuery(name = "offer_find_by_title", query = "SELECT o FROM OffersModel o WHERE o.title like CONCAT('%',?1,'%')"),
        @NamedQuery(name = "offer_find_by_minBidValue", query = "SELECT o FROM OffersModel o WHERE o.valueHighestBid > ?1")
})
public class OffersModel {

  @JsonIgnore
  public static int nextId = 20001;

  @Id
  @JsonView(DataView.DynamicFilter.class)
  public int id;

  @JsonView(DataView.DynamicFilter.class)
  public String title;

  public String date;

  public String description;

  @JsonView(DataView.DynamicFilter.class)
  public Status status;

  public double valueHighestBid;

  @JsonManagedReference
  @OneToMany(mappedBy = "offers")
  public List<Bid> bidArrayList;

  public OffersModel() {}

  public static final List<Status> VALUES =
          Collections.unmodifiableList(Arrays.asList(Status.values()));

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    OffersModel offersModel = (OffersModel) o;
    return id == offersModel.id;
  }

  public int hashCode() {
    return Objects.hash(id);
  }

  public Bid getLastestBid(){
    if (this.bidArrayList.size() > 0) {
      return this.bidArrayList.get(this.bidArrayList.size() - 1);
    }
    else return null;
  }

  public boolean addHigherBid(Bid newbid){
    if (this.bidArrayList.get(this.bidArrayList.size() - 1).value > newbid.value) {
    return false;
    }

    else{
    this.bidArrayList.add(newbid);
    this.valueHighestBid = newbid.value;
    return true;}
  }

  public double getValueHighestBid(){
    if (this.bidArrayList.size() == 0){
      return 0.0;
    }
    else return this.valueHighestBid;
  }

  public int getNumberOfValues(){
    return this.bidArrayList.size();
  }

  public int getId() {
    return id;
  }
}

