package com.github.gun88.fitnesse.fixture.ssh.util;

import com.github.gun88.fitnesse.fixture.ssh.option.Option;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class OptionUtilsTest {

    @Test
    public void shouldReturnEmptyList_whenEmptyStringProvided() {
        assertTrue(Options.of("").isEmpty());
    }

    @Test
    public void shouldReturnSingleOption_whenSingleStringProvided() {
        List<Option> options = Options.of("MY_OPTION");
        assertEquals(1, options.size());
        assertEquals(options.get(0).getKey(), "MY_OPTION");
        assertNull(options.get(0).getValue());
    }

    @Test
    public void shouldReturnSingleOptionWithValue_whenSingleStringProvided() {
        List<Option> options = Options.of("MY_OPTION=my-value");
        assertEquals(1, options.size());
        assertEquals(options.get(0).getKey(), "MY_OPTION");
        assertEquals(options.get(0).getValue(), "my-value");
    }

    @Test
    public void shouldReturnSingleOptionWithValueAndSpaces_whenSingleStringProvidedWithQuotes() {
        List<Option> options = Options.of("MY_OPTION=\"my value\"");
        assertEquals(1, options.size());
        assertEquals(options.get(0).getKey(), "MY_OPTION");
        assertEquals(options.get(0).getValue(), "my value");
    }

    @Test
    public void shouldNotOverwrite_whenSameKeyProvided() {
        List<Option> options = Options.of("MY_OPTION=123 MY_OPTION=345");
        assertEquals(2, options.size());
        assertEquals(options.get(0).getKey(), "MY_OPTION");
        assertEquals(options.get(0).getValue(), "123");
        assertEquals(options.get(1).getKey(), "MY_OPTION");
        assertEquals(options.get(1).getValue(), "345");
    }

    @Test
    public void shouldReturnMultipleOptions_whenDetected() {
        List<Option> options = Options.of("O1 O2=my-o2 O3=\"my o3\" O4=\"my \\\"o4\\\"\"");
        assertEquals(4, options.size());
        assertEquals(options.get(0).getKey(), "O1");
        assertNull(options.get(0).getValue());
        assertEquals(options.get(1).getKey(), "O2");
        assertEquals(options.get(1).getValue(), "my-o2");
        assertEquals(options.get(2).getKey(), "O3");
        assertEquals(options.get(2).getValue(), "my o3");
        assertEquals(options.get(3).getKey(), "O4");
        assertEquals(options.get(3).getValue(), "my \"o4\"");
    }
}
