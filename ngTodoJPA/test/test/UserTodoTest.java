package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.User;
import entities.Todo;


public class UserTodoTest {
	private EntityManagerFactory emf = null;
	private EntityManager em = null;
	
	@Before 
	public void setUp() {
		emf = Persistence.createEntityManagerFactory("Todo");
		em = emf.createEntityManager();
		}
	
	@After
	public void tearDown() {
		em.close();
		emf.close();
	}
	
	@Test
	  public void test_user_todo_association() {
	     User user = em.find(User.class, 1);
	     Todo todo = user.getTodos().get(0);
	     assertEquals("Take out the trash", todo.getTask());
	  }
}