<<<<<<< HEAD
1. **HEADING**

        # Your_text
        ## Your_text
        ### Your_text
        #### Your_text
        ##### Your_text
        ###### Your_text

# Your_text

## Your_text

### Your_text

#### Your_text

##### Your_text

###### Your_text

2. **Emphasis**

        Italics, with *Text* or _Text_ .
        Bold, with **Text** or __Text.__
        Combined emphasis with **Text and _Text_**.
        Strikethrough uses two tildes. ~~Text~~

Italics, with *Text* or *Text* .  
Bold, with **Text** or **Text.**  
Combined emphasis with **Text and Text***.  
Strikethrough uses two tildes. ~~Text~~  

3. **Lists**

        Unordered List:

         - Item 1

         - Item 2
          - Subitem 2.1
          - Subitem 2.2
                 1. Deeper subitem 2.2.1
          - Subitem 2.3

- Item 1

- Item 2
  - Subitem 2.1
  - Subitem 2.2
        1. Deeper subitem 2.2.1
  - Subitem 2.3

        Ordered List:

          1. First item
          2. Second item
          3. Third item

   1. First item
   2. Second item
   3. Third item

4. **Links**
    1. Inline Link  
          [Link Text](https://www.example.com)

    2. Reference Link  
          [Link Text][link-id]

          [link-id]: https://www.example.com

            This allows you to define the link separately and reference it later in the document.

    3. Automatic Link  
            <https://www.example.com>

            This creates a link directly from the URL without any additional text.

    4. Named URL  
            [https://www.example.com](https://www.example.com)

            This displays the full URL as the link text.

    5. Section Links

         ```
         #Section 
         [Section 1](#Section)
         ```

        # Section

         [Section 1](#section)

5. **Image**

Note : In image url image name must be without spaces.

    1. Inline Link  
           `![Alt Text](image-url "Text to display on hover")`
                
        ![Alt Text](IMAGE/project2.jpg "Nature Image")

    1. Reference-style: 

        ```
           ![alt text][logo]
           
           [logo]: image-url "Text to display on hover"
        ```

![alt text][logo]

[logo]: IMAGE/project2.jpg "Nature Image"

6. **Code**

        Inline code:  `code`
`code`

        Code block:
                 ```laguage_name

                 code

                 ```

```javascript

                 function greet(name) {
                 return "Hello, " + name + "!";
                 }
                 
                 console.log(greet("World"));

```

7. **Break the text in different lines**

        ⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

        ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
        ⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
        ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

<!-- Concept is of space at the end of the line, in starting you give or not it does not matter.  -->

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)  

8. **Footnotes**

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.  
[^2]: Every new line should be prefixed with 2 spaces.
  This allows you to have a footnote with multiple lines.  
[^note]:Named footnotes will still render with numbers instead of the text but allow easier identification and linking.

    This footnote also has been made with a different syntax using 4 spaces for new lines.

9. **Alerts**

        [!NOTE]
        Highlights information that users should take into account, even when skimming.

        [!TIP]
        Optional information to help a user be more successful.

        [!IMPORTANT]
        Crucial information necessary for users to succeed.

        [!WARNING]
        Critical content demanding immediate user attention due to potential risks.

        [!CAUTION]
        Negative potential consequences of an action.

> [!NOTE]
> Highlights information that users should take into account, even when skimming.  

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

10. **Ignoring Markdown formatting**

        Let's rename \*our-new-project\* to \*our-old-project\*.

Let's rename \*our-new-project\* to \*our-old-project\*.

11. **Task lists**

- [ ] Task 1
- [x] Task 2 (completed)
- [ ] Task 3

12. **Tables**

```
| Heading1  | Heading2 |
| --------- |:--------:|
| DAta      | Data     |
| DAta      | Data     |
| DAta      | Data     |
```

| Heading1  | Heading2 |
| ------------- |:-------------:|
| DAta | Data     |
| DAta  | Data     |
| DAta    | Data     |
=======
1. **HEADING**

        # Your_text
        ## Your_text
        ### Your_text
        #### Your_text
        ##### Your_text
        ###### Your_text

# Your_text

## Your_text

### Your_text

#### Your_text

##### Your_text

###### Your_text

2. **Emphasis**

        Italics, with *Text* or _Text_ .
        Bold, with **Text** or __Text.__
        Combined emphasis with **Text and _Text_**.
        Strikethrough uses two tildes. ~~Text~~

Italics, with *Text* or *Text* .  
Bold, with **Text** or **Text.**  
Combined emphasis with **Text and Text***.  
Strikethrough uses two tildes. ~~Text~~  

3. **Lists**

        Unordered List:

         - Item 1

         - Item 2
          - Subitem 2.1
          - Subitem 2.2
                 1. Deeper subitem 2.2.1
          - Subitem 2.3

- Item 1

- Item 2
  - Subitem 2.1
  - Subitem 2.2
        1. Deeper subitem 2.2.1
  - Subitem 2.3

        Ordered List:

          1. First item
          2. Second item
          3. Third item

   1. First item
   2. Second item
   3. Third item

4. **Links**
    1. Inline Link  
          [Link Text](https://www.example.com)

    2. Reference Link  
          [Link Text][link-id]

          [link-id]: https://www.example.com

            This allows you to define the link separately and reference it later in the document.

    3. Automatic Link  
            <https://www.example.com>

            This creates a link directly from the URL without any additional text.

    4. Named URL  
            [https://www.example.com](https://www.example.com)

            This displays the full URL as the link text.

    5. Section Links

         ```
         #Section 
         [Section 1](#Section)
         ```

        # Section

         [Section 1](#section)

5. **Image**

Note : In image url image name must be without spaces.

    1. Inline Link  
           `![Alt Text](image-url "Text to display on hover")`
                
        ![Alt Text](IMAGE/project2.jpg "Nature Image")

    1. Reference-style: 

        ```
           ![alt text][logo]
           
           [logo]: image-url "Text to display on hover"
        ```

![alt text][logo]

[logo]: IMAGE/project2.jpg "Nature Image"

6. **Code**

        Inline code:  `code`
`code`

        Code block:
                 ```laguage_name

                 code

                 ```

```javascript

                 function greet(name) {
                 return "Hello, " + name + "!";
                 }
                 
                 console.log(greet("World"));

```

7. **Break the text in different lines**

        ⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

        ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
        ⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
        ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

<!-- Concept is of space at the end of the line, in starting you give or not it does not matter.  -->

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)  

8. **Footnotes**

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.  
[^2]: Every new line should be prefixed with 2 spaces.
  This allows you to have a footnote with multiple lines.  
[^note]:Named footnotes will still render with numbers instead of the text but allow easier identification and linking.

    This footnote also has been made with a different syntax using 4 spaces for new lines.

9. **Alerts**

        [!NOTE]
        Highlights information that users should take into account, even when skimming.

        [!TIP]
        Optional information to help a user be more successful.

        [!IMPORTANT]
        Crucial information necessary for users to succeed.

        [!WARNING]
        Critical content demanding immediate user attention due to potential risks.

        [!CAUTION]
        Negative potential consequences of an action.

> [!NOTE]
> Highlights information that users should take into account, even when skimming.  

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

10. **Ignoring Markdown formatting**

        Let's rename \*our-new-project\* to \*our-old-project\*.

Let's rename \*our-new-project\* to \*our-old-project\*.

11. **Task lists**

- [ ] Task 1
- [x] Task 2 (completed)
- [ ] Task 3

12. **Tables**

| Heading1  | Heading2 |
| ------------- |:-------------:|
| DAta | Data     |
| DAta  | Data     |
| DAta    | Data     |
>>>>>>> 2ae1cf9a6e29fd69a5be98b5adb1c85a02112284
