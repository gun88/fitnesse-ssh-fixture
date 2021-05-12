import fitnesse.junit.FitNesseRunner;
import org.junit.runner.RunWith;

import static fitnesse.junit.FitNesseRunner.*;

@RunWith(FitNesseRunner.class)
@FitnesseDir("target/classes/Resources")
@OutputDir("target/reports/fitnesse-results")
@Suite("PlugIns.SshFixture.UserGuide")
public class SshClientFixtureIT {

}
