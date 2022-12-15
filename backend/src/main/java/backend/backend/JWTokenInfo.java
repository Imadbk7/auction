package backend.backend;

public class JWTokenInfo {

  public static final String KEY = "tokenInfo";

  private String email;
  private boolean admin;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public boolean isAdmin() {
    return admin;
  }

  public void setAdmin(boolean admin) {
    this.admin = admin;
  }
}
