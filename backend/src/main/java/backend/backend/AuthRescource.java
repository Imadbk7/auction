package backend.backend;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;

@RestController
public class AuthRescource {

  @Autowired
  private JWTokenUtils tokenGenerator;

  @Autowired
  private PasswordEncoder encoder;

  @Autowired
  private UserRepository userRepo;

  @PostMapping("/rest/auth/users")
  public ResponseEntity<Object> createUser(@RequestBody ObjectNode signupInfo) {

    String email = signupInfo.get("email") == null  ? null : signupInfo.get("email").asText();
    String name = signupInfo.get("name") == null  ? null : signupInfo.get("name").asText();
    String givenPassword = signupInfo.get("password") == null  ? null : signupInfo.get("password").asText();

    User user = new User();
    user.setEmail(email);
    user.setName(name);
    user.setEncodedPassword(encoder.encode(givenPassword));
    user.setAdmin(false);

    User savedUser = userRepo.save(user);

    URI location = ServletUriComponentsBuilder.
      fromCurrentRequest().path("/{id}").
      buildAndExpand(savedUser.getEmail()).toUri();

    return ResponseEntity.created(location).build();
  }

  @PostMapping(path = "/rest/auth", produces = "application/json")
  public ResponseEntity<User> authenticateUser(
    @RequestBody ObjectNode signOnInfo,
    HttpServletRequest request,
    HttpServletResponse response)
    throws AuthenticationException {

    String userEmail = signOnInfo.get("email").asText();
    String password = signOnInfo.get("password").asText();

    // Authenticate the user using the credentials provided
    User user = userRepo.findByEmail(userEmail);

    if(user == null) {
      throw new AuthenticationException("Invalid user and/or password");
    }

    String encodedPassword = encoder.encode(password);

    if(!user.validateEncodedPassword(encodedPassword)) {
      throw new AuthenticationException("Invalid user and/or password");
    }

    // Issue a token for the user valid for some time
    String tokenString = tokenGenerator.encode(user.getEmail(), user.isAdmin());

    return ResponseEntity.accepted()
      .header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenString)
      .body(user);
  }



  @GetMapping("/rest/auth/readToken/{token}")
  public JWTokenInfo readtoken(@PathVariable String token) throws AuthenticationException {
    return this.tokenGenerator.decode(token);
  }

}
