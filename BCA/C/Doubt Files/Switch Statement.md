Your code has a couple of minor issues:

1. The `scanf("%c", &operation);` call immediately after reading the integers will read the newline character left in the input buffer by the previous `scanf` calls. To fix this, you can add a space before `%c` in the `scanf` format string to skip any whitespace characters.
2. Missing newline characters in the `printf` statements to ensure the output is printed on new lines for better readability.

Here's the corrected code:

```c
#include <stdio.h>

int main() {
    char operation;
    int value1, value2;

    printf("Enter the values whom you want to do operation:\n");
    scanf("%d", &value1);
    scanf("%d", &value2);

    printf("Enter the operation name (a for add, s for sub):\n");
    scanf(" %c", &operation); // Note the space before %c

    switch (operation) {
        case 'a': {
            int sum = value1 + value2;
            printf("Sum of Values = %d\n", sum);
            break;
        }
        
        case 's': {
            int diff = value1 - value2;
            printf("Sub of Values = %d\n", diff);
            break;
        }
        
        default:
            printf("You entered the wrong operation\n");
    }

    return 0;
}
```

Explanation of changes:

1. **Whitespace in `scanf` for `char`**: `scanf(" %c", &operation);` ensures that any whitespace characters (including the newline from the previous `scanf` calls) are skipped before reading the actual character input.
2. **Newline in `printf` statements**: Added `\n` to the end of `printf` statements for better readability of output.