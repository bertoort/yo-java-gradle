package main;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class GreeterTest {

  @Test
  public void ShouldGreet() {
    Greeter greeter = new Greeter();
    assertEquals("Hello world!", greeter.sayHello());
  }

}
