package backend.backend;

import backend.backend.Exception.ResourceNotFoundException;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.ArrayList;

@Transactional
@Repository
@Primary
public class OffersRepositoryJpa implements OffersRepo {

    @PersistenceContext
    EntityManager em;

    @Override
    public ArrayList<OffersModel> getAll() {
        TypedQuery<OffersModel> query =
                this.em.createQuery(
                        "select o from OffersModel o", OffersModel.class);

        return (ArrayList<OffersModel>) query.getResultList();
    }

    public ArrayList<Bid> getAllBids() {
        TypedQuery<Bid> query =
                this.em.createQuery(
                        "select o from Bid o", Bid.class);

        return (ArrayList<Bid>) query.getResultList();
    }

    @Override
    public OffersModel findOneById(int id) {
        return em.find(OffersModel.class, id);
    }

    @Override
    public void edit(OffersModel offersModel) {

    }

    @Override
    public OffersModel save(OffersModel offersModel) {
        return em.merge(offersModel);
    }


    public Bid save3(Bid bid) {
        return em.merge(bid);
    }

    @Override
    public boolean deleteOne(int id) {
        em.remove(em.find(OffersModel.class, id));
        return em.find(OffersModel.class, id) == null;
    }

    @Override
    public ArrayList<OffersModel> findByQuery(String jpqlNAme, Object... params) {
        //finds all instances from a named jpql-query
        TypedQuery<OffersModel> query = this.em.createNamedQuery(jpqlNAme, OffersModel.class);

        for (int i = 0; i < params.length; i++) {
            query.setParameter(i + 1, params[i]);
        }

        return (ArrayList<OffersModel>) query.getResultList();
    }

    public Bid save2(Bid bid) {
        return em.merge(bid);
    }

    public void createFakeOffers() {
        OffersModel offersModel = new OffersModel();
        offersModel.id = OffersModel.nextId++;
        offersModel.title = "offer " + offersModel.id;
        offersModel.valueHighestBid = 5.88 + offersModel.id;
        offersModel.status = OffersModel.VALUES.get((int) Math.round(Math.random() * 4));
        offersModel.description = "" + offersModel.id;
        offersModel.date = "" + offersModel.id;

        this.em.merge(offersModel);
    }

    public OffersModel getRandomOffer() {
        OffersModel offersModel = new OffersModel();
        offersModel.id = OffersModel.nextId++;
        offersModel.title = "Offer " + offersModel.id;
        offersModel.valueHighestBid = 5.88 + offersModel.id;
        offersModel.status = OffersModel.VALUES.get((int) Math.round(Math.random() * 4));
        offersModel.description = "" + offersModel.id;
        offersModel.date = "" + offersModel.id;
        return offersModel;
    }

    public void newBid(int id, Bid bid) {
        OffersModel o = this.findOneById(id);
        bid.setOffersModel(o);
        this.save(o);
        this.save3(bid);
    }

    public static Status asMyEnum(String str) {
        for (Status status : Status.values()) {
            if (status.name().equalsIgnoreCase(str))
                return status;
        }
        throw new ResourceNotFoundException("Status="+ str +" is not a valid auction status value.");
    }
}
