package backend.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootApplication
public class BackendApplication {

  @Autowired
  private OffersRepo offersRepo;
  private OffersModel findById;
  private OffersRepoMock offersRepoMock;
  private OffersRepositoryJpa offersRepositoryJpa;

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }


}
