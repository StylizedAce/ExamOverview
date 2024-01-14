import React from "react";


const WindowObject = () => {

    return (
        <div>
            <h1>Window Object</h1>
            <h3>The window object can be seen as the global scope for javascript</h3>

        </div>
    )
}


const FormSubmitEvents = () => {

    return (
        <div>
            <h1>Form Submit Events</h1>
            <h3>Form submit events are events that are triggered when a form is submitted</h3>

            <h2>Differences in how submits work across the board</h2>

            <div className="row">

                <div className="col-4">
                    <h3>HTML</h3>

                    <p>HTML forms can be submitted with a button or by pressing enter in a input field</p>
                    </div>
                
                <div className="col-4">
                    <h3>Vanilla Javascript</h3>
                    <p>Javascript forms can be submitted with a button or by pressing enter in a input field</p>
                    </div>

                <div className="col-4">
                    <h3>React</h3>
                    <p>React forms can be submitted with onSubmit events</p>
                    <h3>Look at the 3 files under formSubmits</h3>
                    </div>
            </div>

        </div>
    )
}

export { WindowObject, FormSubmitEvents }