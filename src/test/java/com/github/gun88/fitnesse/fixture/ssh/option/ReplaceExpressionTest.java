package com.github.gun88.fitnesse.fixture.ssh.option;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;

public class ReplaceExpressionTest {

    @Test
    public void shouldReplace_whenDoReplaceCalledOnValidExpression() {
        ReplaceExpression replaceExpression = ReplaceExpression.of("/[0-9]+ foobar/Replaced/");
        assertEquals("AbcReplaced-hello", replaceExpression.doReplace("Abc123 foobar-hello"));
        assertEquals("/[0-9]+ foobar/Replaced/", replaceExpression.toString());
    }

    @Test
    public void shouldThrowException_whenInvalidExpressionCalled() {
        RuntimeException exception = assertThrows(RuntimeException.class, () -> ReplaceExpression.of("invalid"));
        assertEquals("Invalid replace expression: invalid", exception.getMessage());
    }
}
