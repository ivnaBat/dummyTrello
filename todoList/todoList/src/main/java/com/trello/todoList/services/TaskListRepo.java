package com.trello.todoList.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.trello.todoList.models.TaskList;

public interface TaskListRepo extends CrudRepository<TaskList,Integer> {
	@Query( "select o from TaskList o where board_id = :board_id" )
	List<TaskList> findByBoardId(@Param("board_id") int boardId);

}
