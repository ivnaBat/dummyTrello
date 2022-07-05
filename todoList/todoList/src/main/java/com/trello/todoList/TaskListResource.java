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

import com.trello.todoList.models.Board;
import com.trello.todoList.models.TaskList;
import com.trello.todoList.services.BoardRepo;
import com.trello.todoList.services.TaskListRepo;

@CrossOrigin(origins="*")
@RestController
public class TaskListResource {
	
	@Autowired
	private TaskListRepo taskListRepo;
	@Autowired
	private BoardRepo boardRepo;
	
	@PostMapping("/home/{boardId}/addTaskList")
	public TaskList addTaskList( @PathVariable int boardId, @RequestBody String taskListName) {
		TaskList taskList = new TaskList();
		taskList.setName(taskListName);
		Optional<Board> board =boardRepo.findById(boardId);
		 if (board.isPresent()) {
			taskList.setBoard(board.get());
	    }
		return taskListRepo.save(taskList);	
	
	}
	
	@RequestMapping("/home/{boardId}/taskLists")
	public List<TaskList> retrieveTaskLists(@PathVariable int boardId) {
		return (List<TaskList>) taskListRepo.findByBoardId(boardId);
	}

}
