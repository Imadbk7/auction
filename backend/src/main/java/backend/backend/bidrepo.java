package backend.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface bidrepo extends JpaRepository<Bid, Integer> {
  List<Bid> findAll();
  Bid findById(int id);
  Bid deleteById(int id);
}
