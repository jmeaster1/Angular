package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.TodoDAO;
import entities.Todo;

@RestController
public class TodoController {
	
	@Autowired
	TodoDAO dao;
	
	@RequestMapping(path="ping", method=RequestMethod.GET)
	public String ping(){
	  return "pong";
	}
	
	@RequestMapping(path = "users/{uid}/todo", method = RequestMethod.GET)
	public List<Todo> index(@PathVariable int uid) {
		return dao.index(uid);
	}
	
	@RequestMapping(path = "users/{uid}/todo/{tid}", method = RequestMethod.GET)
	public Todo show(@PathVariable int uid, @PathVariable int tid ) {
		return dao.show(uid, tid);
	}
	@RequestMapping(path = "users/{uid}/todo", method = RequestMethod.POST)
	public Todo create(@PathVariable int uid, @RequestBody String jsonAddress) {
			return dao.create(uid, jsonAddress);
	}
	@RequestMapping(path = "users/{uid}/todo/{tid}", method = RequestMethod.PUT)
	public Todo update(@PathVariable int uid, @PathVariable int tid, @RequestBody String jsonAddress) {
			return dao.update(uid, tid, jsonAddress);
	}
	@RequestMapping(path = "users/{uid}/todo/{tid}", method = RequestMethod.DELETE)
	public boolean destroy(@PathVariable int uid, @PathVariable int tid) {
		return dao.destroy(uid, tid);
	}

}