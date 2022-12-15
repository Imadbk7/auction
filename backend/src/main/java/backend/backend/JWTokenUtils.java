package backend.backend;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.naming.AuthenticationException;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JWTokenUtils {
  // A claim indicating if the user is an administrator
  public static final String JWT_ADMIN_CLAIM = "admin";

  @Value("${jwt.issuer:MyOrganisation}")
  private String issuer;

  @Value("${jwt.pass-phrase}")
  private String passphrase;

  @Value("${jwt.expiration-seconds}")
  private int expiration;

  /**
   * Generate a Json Web Token
   * @param id user id (or subject)
   * @param admin is an administrator?
   * @return the token representation
   */
  public String encode(String id, boolean admin) {

    Key key = getKey(passphrase);

    String token = Jwts.builder()
      .claim(Claims.SUBJECT,id) // registered claim
      .claim(JWT_ADMIN_CLAIM,Boolean.toString(admin)) // public claim
      .setIssuer(issuer) // registered claim
      .setIssuedAt(new Date()) // registered claim
      .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000)) // registered claim
      .signWith(key, SignatureAlgorithm.HS512)
      .compact();

    return token;
  }

  /**
   * Get the secret key
   * @param passPhrase
   * @return
   */
  private Key getKey(String passPhrase) {
    byte hmacKey[] = passPhrase.getBytes(StandardCharsets.UTF_8);
    Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
    return key;
  }

  /**
   * Decode the given token, returning an object with useful token data
   * @param encodedToken
   * @return
   * @throws AuthenticationException for expired, malformed tokens
   */
  public JWTokenInfo decode(String encodedToken) throws AuthenticationException {
    try {
      // Validate the token
      Key key = getKey(passphrase);
      Jws<Claims> jws = Jwts.parser().setSigningKey(key).parseClaimsJws(encodedToken);
      Claims claims = jws.getBody();

      JWTokenInfo tokenInfo = new JWTokenInfo();
      tokenInfo.setEmail(claims.get(Claims.SUBJECT).toString());

      String isAdminString = claims.get(JWT_ADMIN_CLAIM).toString();
      tokenInfo.setAdmin(Boolean.parseBoolean(isAdminString));

      return tokenInfo;

    } catch (ExpiredJwtException | MalformedJwtException |
      UnsupportedJwtException | IllegalArgumentException| SignatureException e) {
      throw new AuthenticationException(e.getMessage());
    }
  }


}
