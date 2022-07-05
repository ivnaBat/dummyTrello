package com.trello.todoList;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trello.todoList.models.Board;
import com.trello.todoList.services.BoardRepo;

@CrossOrigin(origins="*")
@RestController
public class BoardResource {
	
	private static final Logger logger = LoggerFactory.getLogger(BoardResource.class);
	
	@Autowired
	private BoardRepo boardRepo;
	
	@PostMapping("/home/addBoard")
	public Board addBoard(@RequestBody String boardName) {
		Board board = new Board();
		//logger.warn(boardName);
		//logger.warn("anything");
		board.setBoardName(boardName);
		return boardRepo.save(board);	
	}
	
	@RequestMapping("/home/boards")
	public List<Board> retrieveBoards() {
		return (List<Board>) boardRepo.findAll();
	}

	

}

