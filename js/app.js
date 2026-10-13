
/* =========================
   DEVSHELF APP
   Navigation, Search, Library, Questions
========================= */

const libraryKey = "devshelf_library";
const questionsKey = "devshelf_questions";

/* =========================
   SHELF DATA
========================= */

const shelves = {
    java: {
        name: "Java",
        category: "PROGRAMMING",
        description: "Learn Java from the basics and build your programming knowledge step by step.",
        url: "shelves/java.html",
        lessons: [
            "Variables and Data Types", "Operators", "Type Casting",
            "Using Scanner", "Reading User Input", "Output with System.out",
            "if and else", "switch Statements", "Loops", "Creating Methods",
            "Parameters and Arguments", "Return Values", "Classes and Objects",
            "Constructors", "Encapsulation"
        ]
    },
    html: {
        name: "HTML",
        category: "WEB",
        description: "Learn how webpages are structured using HTML elements, attributes, and semantic markup.",
        url: "shelves/html.html",
        lessons: [
            "Basic HTML Structure", "HTML Elements", "HTML Attributes",
            "Headings and Paragraphs", "Links", "Text Formatting",
            "Images", "Audio and Video", "Embedded Content",
            "Ordered and Unordered Lists", "HTML Tables", "Table Structure",
            "Form Structure", "Input Types", "Buttons and Labels"
        ]
    },
    css: {
        name: "CSS",
        category: "WEB",
        description: "Learn how to style webpages using selectors, colors, layouts, spacing, and responsive design.",
        url: "shelves/css.html",
        lessons: [
            "Adding CSS", "CSS Syntax", "Inline, Internal & External CSS",
            "Element Selectors", "Class Selectors", "ID Selectors",
            "Colors", "Fonts", "Text Styling", "Margin", "Padding",
            "Borders", "Flexbox", "CSS Grid", "Responsive Design"
        ]
    },
    javascript: {
        name: "JavaScript",
        category: "WEB",
        description: "Learn JavaScript fundamentals and use it to add logic, behavior, and interaction to webpages.",
        url: "shelves/javascript.html",
        lessons: [
            "Adding JavaScript", "Variables", "Data Types", "if and else",
            "Comparison Operators", "Logical Operators", "for Loops",
            "while Loops", "Loop Control", "Creating Functions",
            "Parameters", "Return Values", "Selecting Elements",
            "Changing HTML and CSS", "Handling Events"
        ]
    }
};

/* =========================
   SAFE LOCAL STORAGE
========================= */

function readStorage(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Unable to save data:", error);
        return false;
    }
}

function getLibrary() {
    return readStorage(libraryKey);
}

function getQuestions() {
    return readStorage(questionsKey);
}

/* =========================
   LIBRARY
========================= */

function updateLibraryCount() {
    const count = document.getElementById("libraryCount");
    if (count) count.textContent = `${getLibrary().length} saved`;
}

function saveLesson(title) {
    const saved = getLibrary();

    if (!saved.includes(title)) {
        saved.push(title);
        writeStorage(libraryKey, saved);
    }

    updateLibraryCount();
    renderLibrary();
}

function removeLesson(title) {
    writeStorage(
        libraryKey,
        getLibrary().filter(item => item !== title)
    );

    updateLibraryCount();
    renderLibrary();
}

function renderLibrary() {
    const list = document.getElementById("libraryList");
    if (!list) return;

    const saved = getLibrary();
    list.replaceChildren();

    if (saved.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";

        const message = document.createElement("p");
        message.textContent = "No saved lessons yet.";

        const hint = document.createElement("span");
        hint.textContent = "Lessons you save will appear here.";

        empty.append(message, hint);
        list.appendChild(empty);
        return;
    }

    saved.forEach(title => {
        const item = document.createElement("div");
        item.className = "library-item";

        const label = document.createElement("span");
        label.textContent = title;

        const remove = document.createElement("button");
        remove.className = "small-button";
        remove.textContent = "Remove";
        remove.dataset.removeLesson = title;

        item.append(label, remove);
        list.appendChild(item);
    });
}

/* =========================
   LIBRARY DRAWER
========================= */

function openLibrary() {
    const drawer = document.getElementById("libraryDrawer");
    const overlay = document.getElementById("drawerOverlay");

    if (!drawer) return;

    renderLibrary();
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");

    if (overlay) overlay.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}

function closeLibrary() {
    const drawer = document.getElementById("libraryDrawer");
    const overlay = document.getElementById("drawerOverlay");

    if (drawer) {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
    }

    if (overlay) overlay.classList.add("hidden");

    document.body.style.overflow = "";
}

document.getElementById("libraryButton")?.addEventListener("click", openLibrary);
document.getElementById("closeLibrary")?.addEventListener("click", closeLibrary);
document.getElementById("drawerOverlay")?.addEventListener("click", closeLibrary);

/* =========================
   SHELF NAVIGATION
========================= */

function openShelf(name) {
    const shelf = shelves[name];
    if (shelf) window.location.href = shelf.url;
}

document.querySelectorAll(".open-shelf").forEach(button => {
    button.addEventListener("click", () => {
        openShelf(button.dataset.shelf);
    });
});

/* =========================
   SEARCH
========================= */

function searchShelves(query) {
    const term = query.trim().toLowerCase();
    if (!term) return [];

    const results = [];

    Object.entries(shelves).forEach(([key, shelf]) => {
        if (
            shelf.name.toLowerCase().includes(term) ||
            shelf.category.toLowerCase().includes(term)
        ) {
            results.push({
                shelf: key,
                shelfName: shelf.name,
                title: shelf.name,
                description: shelf.description,
                type: "shelf",
                url: shelf.url
            });
        }

        shelf.lessons.forEach(lesson => {
            if (lesson.toLowerCase().includes(term)) {
                const isAvailable =
                    key === "html" &&
                    lesson === "Basic HTML Structure";

                results.push({
                    shelf: key,
                    shelfName: shelf.name,
                    title: lesson,
                    description: `Lesson from the ${shelf.name} shelf.`,
                    type: "lesson",
                    url: isAvailable
                        ? "shelves/html_lessons/basic-html-structure.html"
                        : null
                });
            }
        });
    });

    return results;
}

function renderSearchResults(results) {
    const grid = document.getElementById("searchGrid");
    const empty = document.getElementById("searchEmpty");

    if (!grid) return;

    grid.replaceChildren();

    if (results.length === 0) {
        if (empty) empty.classList.remove("hidden");
        return;
    }

    if (empty) empty.classList.add("hidden");

    results.forEach(result => {
        const card = document.createElement("article");
        card.className = "topic-card";

        const head = document.createElement("div");
        head.className = "topic-card-head";

        const tag = document.createElement("span");
        tag.className = "topic-tag";
        tag.textContent = result.shelfName;

        const title = document.createElement("h3");
        title.textContent = result.title;

        const description = document.createElement("p");
        description.textContent = result.description;

        const actions = document.createElement("div");
        actions.className = "card-actions";

        const button = document.createElement("button");
        button.className = "small-button";
        button.textContent = result.url
            ? result.type === "lesson" ? "Open lesson" : "View shelf"
            : result.type === "lesson" ? "Find on shelf" : "View shelf";

        button.addEventListener("click", () => {
            if (result.url) {
                window.location.href = result.url;
            } else if (result.type === "lesson") {
                window.location.href =
                    `${result.url || shelves[result.shelf].url}#${encodeURIComponent(result.title)}`;
            } else {
                openShelf(result.shelf);
            }
        });

        head.append(tag, title);
        actions.appendChild(button);
        card.append(head, description, actions);
        grid.appendChild(card);
    });
}

const searchInput = document.getElementById("searchInput");

function showSearchResults(query) {
    const shelvesView = document.getElementById("shelvesView");
    const searchResults = document.getElementById("searchResults");

    if (!shelvesView || !searchResults) return;

    if (!query.trim()) {
        shelvesView.classList.remove("hidden");
        searchResults.classList.add("hidden");
        return;
    }

    shelvesView.classList.add("hidden");
    searchResults.classList.remove("hidden");
    renderSearchResults(searchShelves(query));
}

searchInput?.addEventListener("input", () => {
    showSearchResults(searchInput.value);
});

document.getElementById("closeSearch")?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";

    document.getElementById("shelvesView")?.classList.remove("hidden");
    document.getElementById("searchResults")?.classList.add("hidden");
});

document.getElementById("findTopicButton")?.addEventListener("click", () => {
    document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => searchInput?.focus(), 500);
});

/* =========================
   SAVE LESSON BUTTONS
========================= */

document.addEventListener("click", event => {
    const button = event.target.closest("[data-save-lesson]");

    if (button) {
        saveLesson(button.dataset.saveLesson);
    }
});

/* =========================
   REMOVE SAVED LESSON
========================= */

document.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-lesson]");

    if (button) {
        removeLesson(button.dataset.removeLesson);
    }
});

/* =========================
   QUESTION FORM
========================= */

const questionForm = document.getElementById("questionForm");

questionForm?.addEventListener("submit", event => {
    event.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const questionInput = document.getElementById("questionInput");
    const status = document.getElementById("questionStatus");

    if (!questionInput) return;

    const question = questionInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : "";

    if (!question) {
        questionInput.focus();
        return;
    }

    const questions = getQuestions();

    questions.push({
        name,
        question,
        date: new Date().toLocaleDateString()
    });

    if (!writeStorage(questionsKey, questions)) {
        if (status) {
            status.textContent = "Unable to save your question in this browser.";
        }
        return;
    }

    questionForm.reset();

    if (status) {
        status.textContent =
            "Question saved in this browser. Thanks for helping improve DevShelf.";
    }
});

/* =========================
   LESSON MODAL
========================= */

function openLesson(title, content) {
    const modal = document.getElementById("lessonModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    if (!modal) return;

    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = content;

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLesson() {
    const modal = document.getElementById("lessonModal");
    if (!modal) return;

    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.getElementById("closeModal")?.addEventListener("click", closeLesson);

/* =========================
   UNAVAILABLE LESSON LINKS
========================= */

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.classList.add("lesson-unavailable");
    link.setAttribute("aria-disabled", "true");
    link.title = "This lesson is not available yet.";

    link.addEventListener("click", event => {
        event.preventDefault();

        if (link.querySelector(".availability-note")) return;

        const note = document.createElement("small");
        note.className = "availability-note";
        note.textContent = "Coming soon";
        link.appendChild(note);
    });
});

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeLesson();
        closeLibrary();
    }
});

/* =========================
   INITIALIZE
========================= */

updateLibraryCount();
renderLibrary();
