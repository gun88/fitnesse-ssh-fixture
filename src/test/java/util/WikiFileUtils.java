package util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class WikiFileUtils {
    public static boolean contains(File file, String line) throws IOException {
        return Files.readAllLines(file.toPath()).stream().anyMatch(x -> x.equals(line));
    }
}
