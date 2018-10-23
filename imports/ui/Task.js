import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {
    //Set the checked property to the oppsoite of its current value

        Tasks.update(this.props.task._id, {
            $set: {checked: !this.props.task.checked},
        });
    }

    deleteThisTask(){
        Tasks.remove(this.props.task._id);
    }

    render() {
        // Give tasks a different className when they are checked off,
        // So that we can style them nicely in CSS

        return (
            <li>{this.props.task.text}</li>
        );
    }
}