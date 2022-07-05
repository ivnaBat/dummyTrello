package com.trello.todoList.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.trello.todoList.models.Task;

public interface TaskRepo extends CrudRepository<Task,Integer>{
	@Query( "select o from Task o where task_list_id = :taskList_id" )
	List<Task> findByTaskListId(@Param("taskList_id") int taskListId);

}
