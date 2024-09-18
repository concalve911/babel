"use strict";

$(document).ready(function () {
  $("#todo-list").on("click", ".todo-item", function () {
    var taskText = $(this).contents().not("button").text().trim();
    $("#taskDetails").html("<p>".concat(taskText, "</p>"));
    $("#taskModal").modal("show");
  });
  $("#add-task").on("click", function () {
    var newTask = prompt("Enter your task:");
    while (newTask === null || newTask.trim() === "") {
      newTask = prompt("Task cannot be empty. Please enter your task:");
    }
    if (newTask) {
      $("#todo-list").append("<li class=\"list-group-item todo-item d-flex justify-content-between align-items-center\">\n           ".concat(newTask, "\n           <button class=\"btn btn-danger btn-sm ms-2 delete-task\">Delete</button>\n         </li>"));
    }
  });
  $("#todo-list").on("click", ".delete-task", function () {
    var confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      $(this).closest(".todo-item").remove();
    }
  });
});
