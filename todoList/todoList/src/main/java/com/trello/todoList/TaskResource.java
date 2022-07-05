package com.trello.todoList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trello.todoList.models.Task;
import com.trello.todoList.models.TaskList;
import com.trello.todoList.services.TaskListRepo;
import com.trello.todoList.services.TaskRepo;

@CrossOrigin(origins="*")
@RestController
public class TaskResource {
	
	@Autowired
	private TaskRepo taskRepo;
	@Autowired
	private TaskListRepo taskListRepo;
	
	@PostMapping("/home/{taskListId}/addTask")
	public Task addTask(@RequestBody String taskDescription, @PathVariable int taskListId) {
		Task task = new Task();
		//logger.warn(boardName);
		//logger.warn("anomaly string");
		task.setDescription(taskDescription);
		Optional<TaskList> taskList = taskListRepo.findById(taskListId);
		 if (taskList.isPresent()) {
			task.setTaskList(taskList.get());
	    }
		return taskRepo.save(task);	
	
	}
	
	@RequestMapping("/home/{taskListId}/tasks")
	public List<Task> retrieveTask(@PathVariable int taskListId) {
		return (List<Task>) taskRepo.findByTaskListId(taskListId);
	}

}
