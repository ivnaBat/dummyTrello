package com.trello.todoList.models;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.Id;

@Entity 
public class Board {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String boardName;
	
	@OneToMany(mappedBy="board")
    private Set<TaskList> taskLists;

	public String getBoardName() {
		return boardName;
	}

	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	

}
