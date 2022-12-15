package backend.backend;

import backend.backend.OffersModel;

import java.util.ArrayList;
import java.util.List;

public interface OffersRepo {

    ArrayList<OffersModel> getAll();

    OffersModel findOneById(int id);

    void edit(OffersModel offersModel);
    OffersModel save(OffersModel offersModel);

    boolean deleteOne(int id);

    ArrayList<OffersModel> findByQuery(String jpqlNAme, Object... params);

}
