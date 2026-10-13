const lessonCatalog = {
    html: {
        name: "HTML",
        shelf: "html.html",
        lessons: {
            "Basic HTML Structure": {
                intro: "Learn the standard structure used to create an HTML webpage.",
                explanation: "An HTML document uses a doctype declaration, an html element, a head section for page information, and a body section for visible content.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, DevShelf!</h1>
    <p>My first webpage.</p>
</body>
</html>`,
                output: "Hello, DevShelf!\nMy first webpage.",
                practice: "Create an HTML page with a title, one heading, and one paragraph.",
                summary: "The head contains document information, while the body contains the webpage's visible content."
            },
            "HTML Elements": {
                intro: "Understand how HTML elements organize webpage content.",
                explanation: "Most HTML elements have an opening tag, content, and a closing tag. Some elements, such as img and br, do not use a closing tag.",
                code: `<h1>Welcome</h1>
<p>This is a paragraph.</p>
<hr>
<p>This is another paragraph.</p>`,
                output: "A heading and two paragraphs separated by a horizontal line.",
                practice: "Create a heading, two paragraphs, and a horizontal line.",
                summary: "Elements define the structure and meaning of webpage content."
            },
            "HTML Attributes": {
                intro: "Learn how attributes provide additional information about elements.",
                explanation: "Attributes are written inside an opening tag. They can specify a link destination, image source, alternative text, or other element settings.",
                code: `<a href="https://example.com">
    Visit Example
</a>

<img src="photo.jpg" alt="A sample photograph">`,
                output: "A clickable link and an image if photo.jpg exists.",
                practice: "Create a link using href and an image using src and alt.",
                summary: "Attributes configure elements and are written in the opening tag."
            },
            "Headings and Paragraphs": {
                intro: "Organize webpage text using headings and paragraphs.",
                explanation: "HTML provides six heading levels, from h1 to h6. Paragraphs use the p element. Choose headings according to the content hierarchy, not just their appearance.",
                code: `<h1>My Portfolio</h1>
<h2>About Me</h2>
<p>I am learning web development.</p>
<h3>My Goal</h3>
<p>I want to build useful websites.</p>`,
                output: "A main heading, two smaller headings, and their paragraphs.",
                practice: "Write a page with one h1, two h2 headings, and a paragraph under each.",
                summary: "Headings organize sections; paragraphs contain blocks of text."
            },
            "Links": {
                intro: "Connect webpages and external resources using links.",
                explanation: "The a element creates a hyperlink. Its href attribute specifies the destination. Relative paths can link to files in your project.",
                code: `<a href="https://www.example.com">
    Visit Example
</a>

<a href="../index.html">
    Return Home
</a>`,
                output: "Two clickable links: one external and one to the project's home page.",
                practice: "Add one link to an external website and one to another HTML file in your project.",
                summary: "Use the a element with a valid href to create navigation."
            },
            "Text Formatting": {
                intro: "Emphasize and format text with HTML elements.",
                explanation: "Use strong for important text and em for emphasized text. The b and i elements can draw attention to text without expressing the same semantic importance.",
                code: `<p>This is <strong>important</strong>.</p>
<p>This is <em>emphasized</em>.</p>
<p>This is <mark>highlighted</mark>.</p>
<p>This is <small>smaller text</small>.</p>`,
                output: "Text showing bold importance, emphasis, highlighting, and smaller text.",
                practice: "Write a paragraph using strong, em, mark, and small.",
                summary: "Choose formatting elements based on their meaning, not appearance alone."
            },
            "Images": {
                intro: "Display images and provide useful alternative text.",
                explanation: "The img element displays an image. The src attribute gives its path, while alt provides a text alternative for users who cannot see the image or when it fails to load.",
                code: `<img src="images/cat.jpg"
     alt="A cat sitting on a chair"
     width="300">`,
                output: "A 300-pixel-wide image if the specified file exists.",
                practice: "Display an image from your project and write a descriptive alt attribute.",
                summary: "Use a valid image path and meaningful alt text."
            },
            "Audio and Video": {
                intro: "Add playable audio and video to a webpage.",
                explanation: "The audio and video elements can embed media files. The controls attribute displays built-in playback controls.",
                code: `<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>

<video controls width="400">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>`,
                output: "Audio and video players appear if their media files exist.",
                practice: "Add an audio or video file to your page and enable its controls.",
                summary: "Use audio or video with source elements and appropriate file types."
            },
            "Embedded Content": {
                intro: "Display another webpage or supported content inside your page.",
                explanation: "The iframe element embeds another browsing context, often used for maps or videos. Only embed trusted sources and follow their embedding requirements.",
                code: `<iframe
    src="https://example.com"
    title="Example website"
    width="500"
    height="300">
</iframe>`,
                output: "An embedded frame, provided the website permits embedding.",
                practice: "Embed a trusted webpage or a video using its official embed code.",
                summary: "Use iframe for embedded content and always provide a descriptive title."
            },
            "Ordered and Unordered Lists": {
                intro: "Group related items into numbered or bulleted lists.",
                explanation: "The ol element creates an ordered list. The ul element creates an unordered list. Each item belongs inside an li element.",
                code: `<h2>Steps</h2>
<ol>
    <li>Plan</li>
    <li>Write code</li>
    <li>Test</li>
</ol>

<h2>Tools</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`,
                output: "A numbered list of steps and a bulleted list of tools.",
                practice: "Create a numbered list of three steps and a bulleted list of three hobbies.",
                summary: "Use ol when order matters and ul when it does not."
            },
            "HTML Tables": {
                intro: "Present related information in rows and columns.",
                explanation: "An HTML table uses table, tr for rows, th for header cells, and td for data cells.",
                code: `<table>
    <tr>
        <th>Subject</th>
        <th>Hours</th>
    </tr>
    <tr>
        <td>HTML</td>
        <td>2</td>
    </tr>
</table>`,
                output: "A table with Subject and Hours columns and one data row.",
                practice: "Create a table with two column headings and at least three data rows.",
                summary: "Tables organize tabular data into rows and cells."
            },
            "Table Structure": {
                intro: "Build clearer tables with organized sections.",
                explanation: "The thead element groups header rows, tbody groups the main data, and tfoot groups summary rows. The caption element describes the table.",
                code: `<table>
    <caption>Study Hours</caption>
    <thead>
        <tr><th>Topic</th><th>Hours</th></tr>
    </thead>
    <tbody>
        <tr><td>HTML</td><td>2</td></tr>
        <tr><td>CSS</td><td>3</td></tr>
    </tbody>
    <tfoot>
        <tr><th>Total</th><td>5</td></tr>
    </tfoot>
</table>`,
                output: "A study-hours table with a caption, header, data rows, and total.",
                practice: "Create a table with a caption, thead, tbody, and a total row in tfoot.",
                summary: "Semantic table sections make tabular content easier to understand and maintain."
            },
            "Form Structure": {
                intro: "Create forms that collect information from users.",
                explanation: "The form element groups input controls. Its action and method attributes determine where and how form data is submitted. A working submission requires a suitable server or endpoint.",
                code: `<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input id="name" name="name" required>
    <button type="submit">Submit</button>
</form>`,
                output: "A name field and Submit button. Submission depends on the configured endpoint.",
                practice: "Create a form with a name field and an email field, each with a label.",
                summary: "Forms collect user input; the server or endpoint processes submitted data."
            },
            "Input Types": {
                intro: "Choose input controls suited to different kinds of information.",
                explanation: "The input element supports types such as text, email, password, number, date, and checkbox. Choose a suitable type to improve input and validation.",
                code: `<label for="email">Email:</label>
<input type="email" id="email" name="email">

<label for="age">Age:</label>
<input type="number" id="age" name="age">

<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">`,
                output: "An email field, number field, and date picker.",
                practice: "Create a small form using text, email, password, and checkbox inputs.",
                summary: "The type attribute determines how an input behaves."
            },
            "Buttons and Labels": {
                intro: "Make forms easier to use with buttons and descriptive labels.",
                explanation: "A label identifies a form control. Connecting its for attribute to an input's id lets users click the label to focus or activate that control. Button types include submit, reset, and button.",
                code: `<label for="username">Username:</label>
<input id="username" name="username">

<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Other action</button>`,
                output: "A labeled input and three buttons with different purposes.",
                practice: "Create a labeled input and submit, reset, and regular buttons inside a form.",
                summary: "Use labels to identify controls and choose the correct button type."
            }
        }
    },

    java: {
        name: "Java",
        shelf: "java.html",
        lessons: {
            "Variables and Data Types": {
                intro: "Learn how Java stores information using variables and data types.",
                explanation: "A variable is a named storage location for a value. Common data types include int for whole numbers, double for decimal numbers, char for a single character, boolean for true or false, and String for text.",
                code: `public class Main {
    public static void main(String[] args) {
        String name = "Alex";
        int age = 18;
        double grade = 92.5;
        char section = 'A';
        boolean enrolled = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(grade);
        System.out.println(section);
        System.out.println(enrolled);
    }
}`,
                output: `Alex
18
92.5
A
true`,
                practice: "Create variables for your name, age, and average grade. Print all three values.",
                summary: "Variables store data. Choose a data type that matches the value you want to store."
            },
            "Operators": {
                intro: "Use operators to calculate values and compare information.",
                explanation: "Arithmetic operators include +, -, *, /, and %. Comparison operators such as ==, !=, >, and < compare values. Logical operators &&, ||, and ! combine or reverse boolean conditions. Integer division discards the fractional part.",
                code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
        System.out.println(a > b);
    }
}`,
                output: `13
7
30
3
1
true`,
                practice: "Create two numbers and print their sum, product, remainder, and whether the first number is greater than the second.",
                summary: "Operators calculate values, compare data, and combine conditions."
            },
            "Type Casting": {
                intro: "Learn how to convert a value from one data type to another.",
                explanation: "Widening conversion, such as int to double, happens automatically. Narrowing conversion, such as double to int, requires an explicit cast and may lose information. Casting a decimal to int removes its fractional part instead of rounding it.",
                code: `public class Main {
    public static void main(String[] args) {
        int number = 10;
        double decimal = number;

        double price = 19.75;
        int wholePrice = (int) price;

        System.out.println(decimal);
        System.out.println(wholePrice);
    }
}`,
                output: `10.0
19`,
                practice: "Convert an int value into a double, then cast a decimal value into an int and print both results.",
                summary: "Automatic widening conversions are common; explicit narrowing casts can lose information."
            },
            "Using Scanner": {
                intro: "Use Scanner to receive input from the keyboard.",
                explanation: "Scanner is a Java class used to read input. Import it from java.util and create a Scanner connected to System.in. Use nextInt() for integers, nextDouble() for decimal numbers, and nextLine() for a full line of text.",
                code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = input.nextInt();

        System.out.println("Your age is " + age);

        input.close();
    }
}`,
                output: `Enter your age: 18
Your age is 18`,
                practice: "Ask the user for their birth year and display the year they were born.",
                summary: "Scanner reads keyboard input using methods suited to different data types."
            },
            "Reading User Input": {
                intro: "Read text and numbers entered by a user.",
                explanation: "Scanner provides methods for reading different kinds of data. next() reads one word, nextLine() reads a complete line, nextInt() reads an integer, and nextDouble() reads a decimal. Match the method to the expected input type.",
                code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = input.nextLine();

        System.out.print("Enter your age: ");
        int age = input.nextInt();

        System.out.println("Hello, " + name);
        System.out.println("Age: " + age);

        input.close();
    }
}`,
                output: `Enter your name: Alex Perlas
Enter your age: 18
Hello, Alex Perlas
Age: 18`,
                practice: "Ask for a student's name and grade, then display both.",
                summary: "Use Scanner methods to read the appropriate type of user input."
            },
            "Output with System.out": {
                intro: "Display messages and values in the console.",
                explanation: "System.out is commonly used to display output in Java. println() prints text and moves to a new line. print() keeps the cursor on the same line. printf() formats output using format specifiers.",
                code: `public class Main {
    public static void main(String[] args) {
        String name = "Alex";
        int score = 95;

        System.out.print("Student: ");
        System.out.println(name);
        System.out.printf("Score: %d%n", score);
        System.out.printf("Average: %.2f%n", 95.567);
    }
}`,
                output: `Student: Alex
Score: 95
Average: 95.57`,
                practice: "Print your name and course on separate lines, then display a decimal number to two decimal places.",
                summary: "Use print(), println(), and printf() depending on how you want output displayed."
            },
            "if and else": {
                intro: "Make decisions based on whether a condition is true or false.",
                explanation: "An if statement runs a block of code when its condition is true. An else block runs when the if condition is false. Conditions commonly use comparison operators.",
                code: `public class Main {
    public static void main(String[] args) {
        int score = 82;

        if (score >= 75) {
            System.out.println("Passed");
        } else {
            System.out.println("Failed");
        }
    }
}`,
                output: "Passed",
                practice: "Create a program that checks whether a number is positive or not positive.",
                summary: "if and else let programs choose between two possible paths."
            },
            "switch Statements": {
                intro: "Choose an action based on the value of an expression.",
                explanation: "A switch statement compares an expression against several case labels. In a traditional switch statement, break prevents execution from continuing into the next case. default handles values that do not match any case.",
                code: `public class Main {
    public static void main(String[] args) {
        int day = 2;

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Invalid day");
        }
    }
}`,
                output: "Tuesday",
                practice: "Use a switch statement to display a message for menu choices 1, 2, and 3.",
                summary: "switch handles multiple choices based on one expression."
            },
            "Loops": {
                intro: "Repeat instructions without writing the same code many times.",
                explanation: "A loop executes a block of code repeatedly. A for loop is useful when the number of repetitions is known. A while loop repeats while a condition is true, while a do-while loop runs its body at least once.",
                code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`,
                output: `Count: 1
Count: 2
Count: 3
Count: 4
Count: 5`,
                practice: "Use a loop to display the numbers from 1 to 10.",
                summary: "Loops repeat code. Choose the loop that best fits the task."
            },
            "Creating Methods": {
                intro: "Organize reusable instructions into named methods.",
                explanation: "A method is a named block of code that performs a task. A method declaration includes a return type, a name, parentheses, and a body. Use methods to organize programs and reduce repeated code.",
                code: `public class Main {
    static void greet() {
        System.out.println("Welcome to DevShelf!");
    }

    public static void main(String[] args) {
        greet();
        greet();
    }
}`,
                output: `Welcome to DevShelf!
Welcome to DevShelf!`,
                practice: "Create a method named showMessage() that prints a message, then call it from main.",
                summary: "Create a method once and call it whenever its task is needed."
            },
            "Parameters and Arguments": {
                intro: "Pass information into methods so they can work with different values.",
                explanation: "Parameters are variables listed in a method declaration. Arguments are the actual values supplied when the method is called. The argument types and order must match the method's parameter list.",
                code: `public class Main {
    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Alex");
        greet("Jamie");
    }
}`,
                output: `Hello, Alex!
Hello, Jamie!`,
                practice: "Create a method that accepts a student's name and displays a personalized greeting.",
                summary: "Parameters define the information a method receives; arguments provide its values."
            },
            "Return Values": {
                intro: "Let methods send calculated results back to the code that called them.",
                explanation: "A method can return a value using the return keyword. Its declared return type must match the kind of value returned. Use void when a method does not return a value.",
                code: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println(result);
    }
}`,
                output: "8",
                practice: "Create a method that accepts two numbers and returns their product.",
                summary: "Return values allow methods to calculate and send results back to their callers."
            },
            "Classes and Objects": {
                intro: "Learn how classes describe objects and how objects hold their own data.",
                explanation: "A class defines the fields and methods that its objects can have. An object is an instance of a class. The new keyword creates an object, and each object can hold its own field values.",
                code: `class Student {
    String name;
    int age;

    void introduce() {
        System.out.println("I am " + name);
        System.out.println("Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Alex";
        student.age = 18;

        student.introduce();
    }
}`,
                output: `I am Alex
Age: 18`,
                practice: "Create a Book class with title and author fields, then create an object and print its details.",
                summary: "Classes define a structure; objects are individual instances of that class."
            },
            "Constructors": {
                intro: "Initialize objects when they are created.",
                explanation: "A constructor runs when an object is created. Its name must match the class name, and it has no return type. A parameterized constructor accepts values when creating an object.",
                code: `class Student {
    String name;
    int age;

    Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Alex", 18);

        System.out.println(student.name);
        System.out.println(student.age);
    }
}`,
                output: `Alex
18`,
                practice: "Create a Product class with a name and price, then initialize both using a constructor.",
                summary: "Constructors initialize new objects and can receive values through parameters."
            },
            "Encapsulation": {
                intro: "Protect an object's data and control how it is accessed.",
                explanation: "Encapsulation groups data and related methods inside a class. A common approach is to make fields private and provide public methods for controlled access. A getter returns a field's value, while a setter can validate a new value.",
                code: `class Student {
    private String name;

    public void setName(String newName) {
        if (newName != null && !newName.isBlank()) {
            name = newName;
        }
    }

    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setName("Alex");

        System.out.println(student.getName());
    }
}`,
                output: "Alex",
                practice: "Create a private age field with a getter and a setter that accepts only positive ages.",
                summary: "Encapsulation protects data by controlling how fields are accessed and changed."
            }
        }
    }
};

function loadLesson() {
    const params = new URLSearchParams(window.location.search);
    const shelfKey = params.get("shelf");
    const topic = params.get("topic");

    const shelf = lessonCatalog[shelfKey];
    const lesson = shelf?.lessons[topic];

    if (!shelf || !lesson) {
        document.title = "Lesson Not Found | DevShelf";
        document.getElementById("lessonTitle").textContent = "Lesson not found";
        document.getElementById("lessonIntro").textContent =
            "This topic could not be found. Return to the shelf and select a lesson.";
        document.getElementById("lessonExplanation").textContent = "";
        document.getElementById("lessonCode").textContent = "";
        document.getElementById("lessonOutput").textContent = "";
        document.getElementById("lessonPractice").textContent = "";
        document.getElementById("lessonSummary").textContent = "";
        document.getElementById("saveLessonButton").hidden = true;
        return;
    }

    document.title = `${topic} | DevShelf`;
    document.getElementById("lessonCategory").textContent =
        `${shelf.name} LESSON`;
    document.getElementById("lessonTitle").textContent = topic;
    document.getElementById("lessonIntro").textContent = lesson.intro;
    document.getElementById("lessonExplanation").textContent = lesson.explanation;
    document.getElementById("lessonCode").textContent = lesson.code;
    document.getElementById("lessonOutput").textContent = lesson.output;
    document.getElementById("lessonPractice").textContent = lesson.practice;
    document.getElementById("lessonSummary").textContent = lesson.summary;

    for (const id of ["shelfLink", "backLink", "returnLink"]) {
        const link = document.getElementById(id);
        if (link) link.href = shelf.shelf;
    }

    const shelfLink = document.getElementById("shelfLink");
    if (shelfLink) shelfLink.textContent = shelf.name;

    const saveButton = document.getElementById("saveLessonButton");
    if (!saveButton) return;

    saveButton.hidden = false;

    saveButton.onclick = () => {
        const status = document.getElementById("saveStatus");

        try {
            if (typeof window.saveLesson === "function") {
                window.saveLesson(topic);
            } else {
                const key = "devshelf_library";
                const saved = JSON.parse(localStorage.getItem(key) || "[]");

                const alreadySaved = saved.some(item =>
                    typeof item === "string"
                        ? item === topic
                        : item?.title === topic
                );

                if (!alreadySaved) {
                    saved.push(topic);
                    localStorage.setItem(key, JSON.stringify(saved));
                }
            }

            if (status) status.textContent = "Lesson saved to your library.";
        } catch (error) {
            if (status) status.textContent = "Could not save this lesson. Please try again.";
            console.error("DevShelf save error:", error);
        }
    };
}

document.addEventListener("DOMContentLoaded", loadLesson);