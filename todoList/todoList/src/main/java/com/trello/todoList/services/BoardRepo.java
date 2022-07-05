package com.trello.todoList.services;

import org.springframework.data.repository.CrudRepository;

import com.trello.todoList.models.Board;

public interface BoardRepo extends CrudRepository<Board,Integer> {

}
