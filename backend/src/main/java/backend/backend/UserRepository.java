package backend.backend;

import java.util.List;

public interface UserRepository {
  User save(User user);

  void delete(User user);

  List<User> findAll();

  User findByEmail(String email);
}
