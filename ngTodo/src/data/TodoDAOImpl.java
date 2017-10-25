package data;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Todo;
import entities.User;

@Transactional
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Todo> index(int uid) {
		String query = "SELECT t FROM Todo t WHERE t.user.id = :uid ";
		List<Todo> todos = em.createQuery(query, Todo.class).setParameter("uid", uid).getResultList();
		return todos;
	}

	@Override
	public Todo show(int uid, int tid) {
		String query = "SELECT t FROM Todo t WHERE t.user.id = :uid AND t.id = :tid";
		Todo todo = em.createQuery(query, Todo.class).setParameter("uid", uid).setParameter("tid", tid).getResultList()
				.get(0);
		return todo;
	}

	@Override
	public Todo create(int uid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
		Todo todo = null;
		try {
			todo = mapper.readValue(todoJson, Todo.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		User user = em.find(User.class, uid);
		todo.setUser(user);
		em.persist(todo);
		em.flush();
		return todo;
	}

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		
		User user = em.find(User.class, uid);
		Todo managedTodo = em.find(Todo.class, tid);
		Todo todo = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			  todo = mapper.readValue(todoJson, Todo.class);
			} catch (Exception e) {
			  e.printStackTrace();
			}
		
		managedTodo.setCompleted(todo.getCompleted());
		managedTodo.setCompletedDate(todo.getCompletedDate());
		managedTodo.setCreatedAt(todo.getCreatedAt());
		managedTodo.setDescription(todo.getDescription());
		managedTodo.setDueDate(todo.getDueDate());
		managedTodo.setTask(todo.getTask());
		managedTodo.setUpdatedAt(todo.getUpdatedAt());
		managedTodo.setUser(user);	
		return managedTodo;
	}

	@Override
	public Boolean destroy(int uid, int tid) {
		User user = em.find(User.class, uid);
		Todo todo = em.find(Todo.class, tid);
		try {
			em.remove(todo);
			List<Todo> userTodos = user.getTodos();
			for (Todo t : userTodos) {
				if (t.getId() == tid) {
					userTodos.remove(t);
					break;
				}
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}