/* =================================
   CURRENT USER
================================= */

let currentUser = null;


/* =================================
   UNIVERSITY DATA
================================= */

const universityData = {

    scholarship: {

        title: "🎓 Scholarship Information",

        content: `

            <p><b>Required Documents:</b></p>

            <p>
            • Aadhaar Card<br>
            • Income Certificate<br>
            • Bank Passbook<br>
            • Previous Marksheet
            </p>

            <p><b>Submission Location:</b></p>

            <p>
            Scholarship Section,
            Administrative Block
            </p>

            <p><b>Office Timing:</b></p>

            <p>
            Monday to Friday,
            10:00 AM to 4:00 PM
            </p>

        `

    },


    library: {

        title: "📚 Library Information",

        content: `

            <p><b>Location:</b></p>

            <p>
            Central Library Building
            </p>

            <p><b>Timing:</b></p>

            <p>
            9:00 AM to 6:00 PM
            </p>

            <p><b>Services:</b></p>

            <p>
            Book Issue,
            Book Return,
            Reading Room
            </p>

        `

    },


    idCard: {

        title: "💳 ID Card Services",

        content: `

            <p>
            If your ID card is lost,
            immediately report it to the
            Student Administration Office.
            </p>

            <p>
            Carry your student enrollment number
            and identity proof.
            </p>

        `

    },


    examination: {

        title: "📝 Examination Office",

        content: `

            <p>
            The Examination Cell handles:
            </p>

            <p>
            • Exam Forms<br>
            • Admit Cards<br>
            • Results<br>
            • Certificates
            </p>

        `

    },


    studentComplaint: {

        title: "⚠️ Student Complaint",

        content: `

            <p>
            Students can submit complaints
            related to academic or campus issues.
            </p>

            <p>
            Your complaint can be tracked
            using your complaint ID.
            </p>

        `

    },


    teacherComplaint: {

        title: "👨‍🏫 Teacher Complaint",

        content: `

            <p>
            Teachers can submit complaints
            related to academic, technical
            or administrative issues.
            </p>

        `

    },


    facultyDocuments: {

        title: "📄 Faculty Documents",

        content: `

            <p>
            Faculty members can access
            official forms and documents
            from the administration office.
            </p>

        `

    },


    facultySchedule: {

        title: "📅 Academic Schedule",

        content: `

            <p>
            View academic activities,
            classes and examination schedules.
            </p>

        `

    },


    administration: {

        title: "🏛️ Administration Office",

        content: `

            <p>
            Handles admissions, certificates
            and official university documents.
            </p>

            <p>
            Location:
            Administrative Block
            </p>

        `

    },


    accounts: {

        title: "💰 Accounts Department",

        content: `

            <p>
            Handles tuition fees,
            payments and financial queries.
            </p>

        `

    },


    itSupport: {

        title: "💻 IT Support",

        content: `

            <p>
            Contact IT Support for technical
            problems related to student portals,
            Wi-Fi and university systems.
            </p>

        `

    },


    campusMap: {

        title: "🗺️ Campus Map",

        content: `

            <p>
            Campus Map helps you find:

            </p>

            <p>
            • Administration Office<br>
            • Library<br>
            • Examination Cell<br>
            • Departments<br>
            • Accounts Office
            </p>

        `

    }

};


/* =================================
   LOGIN USER
================================= */

function loginUser() {


    const usernameInput =

        document.getElementById(
            "usernameInput"
        );


    const username =

        usernameInput.value.trim();


    if (username === "") {

        alert("Please enter your name");

        return;

    }


    /*
       Create a unique user name.

       Example:

       Jyoti
       Rahul
       Priya
    */

    currentUser = username;


    /*
       Save the current logged-in user
       in the browser.
    */

    localStorage.setItem(

        "currentUser",

        currentUser

    );


    showDashboard();

}


/* =================================
   SHOW DASHBOARD
================================= */

function showDashboard() {


    document

        .getElementById("loginPage")

        .classList

        .add("hidden");


    document

        .getElementById("dashboardPage")

        .classList

        .remove("hidden");


    document

        .getElementById("chatPage")

        .classList

        .add("hidden");


    document

        .getElementById("welcomeUser")

        .innerText =

        "Hello, " + currentUser;

}


/* =================================
   LOGOUT
================================= */

function logoutUser() {


    localStorage.removeItem(

        "currentUser"

    );


    currentUser = null;


    document

        .getElementById("dashboardPage")

        .classList

        .add("hidden");


    document

        .getElementById("chatPage")

        .classList

        .add("hidden");


    document

        .getElementById("loginPage")

        .classList

        .remove("hidden");

}


/* =================================
   OPEN CHAT
================================= */

function openChat() {


    document

        .getElementById("dashboardPage")

        .classList

        .add("hidden");


    document

        .getElementById("chatPage")

        .classList

        .remove("hidden");


    loadUserChats();

}


/* =================================
   GO TO DASHBOARD
================================= */

function goToDashboard() {


    document

        .getElementById("chatPage")

        .classList

        .add("hidden");


    document

        .getElementById("dashboardPage")

        .classList

        .remove("hidden");

}


/* =================================
   SHOW INFORMATION
================================= */

function showInformation(serviceName) {


    const data =

        universityData[serviceName];


    document

        .getElementById(

            "informationContent"

        )

        .innerHTML = `

            <h2>

                ${data.title}

            </h2>

            ${data.content}

        `;


    document

        .getElementById(

            "informationBox"

        )

        .classList

        .remove("hidden");

}


/* =================================
   CLOSE INFORMATION
================================= */

function closeInformation() {


    document

        .getElementById(

            "informationBox"

        )

        .classList

        .add("hidden");

}


/* =================================
   GET CURRENT USER'S CHAT KEY
================================= */

function getUserChatKey() {


    return "chats_" + currentUser;

}


/*

    Example:

    If currentUser = Jyoti

    key = chats_Jyoti


    If currentUser = Rahul

    key = chats_Rahul


    Therefore:

    Jyoti's chats are separate
    from Rahul's chats.

*/


/* =================================
   LOAD USER CHATS
================================= */

function loadUserChats() {


    const chatKey =

        getUserChatKey();


    const savedChats =

        localStorage.getItem(

            chatKey

        );


    const chats =

        savedChats

            ? JSON.parse(savedChats)

            : [];


    const messagesContainer =

        document.getElementById(

            "messagesContainer"

        );


    messagesContainer.innerHTML = "";


    chats.forEach(

        chat => {

            displayMessage(

                chat.sender,

                chat.message

            );

        }

    );


    updateChatHistory(chats);

}


/* =================================
   SEND MESSAGE
================================= */

function sendMessage() {


    const input =

        document.getElementById(

            "messageInput"

        );


    const message =

        input.value.trim();


    if (message === "") {

        return;

    }


    /*
       Show user's message
    */

    displayMessage(

        "user",

        message

    );


    /*
       Save user's message
    */

    saveChat(

        "user",

        message

    );


    input.value = "";


    /*
       Create AI answer
    */

    const answer =

        generateAnswer(message);


    setTimeout(

        function() {


            displayMessage(

                "ai",

                answer

            );


            saveChat(

                "ai",

                answer

            );


        },

        500

    );

}


/* =================================
   DISPLAY MESSAGE
================================= */

function displayMessage(

    sender,

    message

) {


    const container =

        document.getElementById(

            "messagesContainer"

        );


    const messageDiv =

        document.createElement(

            "div"

        );


    messageDiv.classList.add(

        "message"

    );


    if (sender === "user") {


        messageDiv.classList.add(

            "user-message"

        );


    } else {


        messageDiv.classList.add(

            "ai-message"

        );

    }


    messageDiv.innerText = message;


    container.appendChild(

        messageDiv

    );


    container.scrollTop =

        container.scrollHeight;

}


/* =================================
   SAVE CHAT
================================= */

function saveChat(

    sender,

    message

) {


    const chatKey =

        getUserChatKey();


    const savedChats =

        localStorage.getItem(

            chatKey

        );


    const chats =

        savedChats

            ? JSON.parse(savedChats)

            : [];


    chats.push({

        sender: sender,

        message: message,

        time: new Date().toLocaleString()

    });


    localStorage.setItem(

        chatKey,

        JSON.stringify(chats)

    );


    updateChatHistory(chats);

}


/* =================================
   CHAT HISTORY
================================= */

function updateChatHistory(chats) {


    const history =

        document.getElementById(

            "chatHistory"

        );


    history.innerHTML = "";


    if (chats.length === 0) {


        history.innerHTML =

            "<p>No conversations yet</p>";


        return;

    }


    const userMessages =

        chats.filter(

            chat =>

                chat.sender === "user"

        );


    userMessages.forEach(

        chat => {


            const item =

                document.createElement(

                    "div"

                );


            item.classList.add(

                "history-item"

            );


            item.innerText =

                chat.message;


            history.appendChild(

                item

            );

        }

    );

}


/* =================================
   QUICK QUESTION
================================= */

function askQuickQuestion(

    question

) {


    const input =

        document.getElementById(

            "messageInput"

        );


    input.value = question;


    sendMessage();

}


/* =================================
   AI ANSWER
================================= */

function generateAnswer(

    question

) {


    const text =

        question.toLowerCase();


    if (

        text.includes(

            "scholarship"

        )

    ) {


        return `

        For the scholarship process,

        you generally need your Aadhaar Card,

        Income Certificate, Bank Passbook

        and Previous Marksheet.

        Submit the form at the Scholarship

        Section in the Administrative Block.

        `;

    }


    if (

        text.includes(

            "library"

        )

    ) {


        return `

        The Central Library is located

        in the Main Library Building.

        Library timing is 9:00 AM to 6:00 PM.

        `;

    }


    if (

        text.includes(

            "id card"

        )

    ) {


        return `

        If you lost your ID card,

        report it to the Student Administration

        Office with your enrollment number.

        `;

    }


    if (

        text.includes(

            "exam"

        )

    ) {


        return `

        The Examination Cell handles

        examination forms, admit cards,

        results and certificates.

        `;

    }


    return `

        I am CampusHub AI.

        I can help you with scholarships,

        library, ID cards, examinations,

        university offices and campus services.

        `;

}


/* =================================
   NEW CHAT
================================= */

function startNewChat() {


    const chatKey =

        getUserChatKey();


    localStorage.removeItem(

        chatKey

    );


    document

        .getElementById(

            "messagesContainer"

        )

        .innerHTML = "";


    updateChatHistory([]);

}


/* =================================
   CHECK USER WHEN PAGE LOADS
================================= */

window.onload = function() {


    const savedUser =

        localStorage.getItem(

            "currentUser"

        );


    if (savedUser) {


        currentUser = savedUser;


        showDashboard();

    }

};