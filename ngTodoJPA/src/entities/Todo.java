package entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String task;
	
	private String description;
	
	private Boolean completed;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name="due_date")
	private String dueDate;
	
	@Column(name="complete_date")
	private String completedDate;
	
	@Column(name="created_at")
	private Date createdAt;
	
	@Column(name="updated_at")
	private Date updatedAt;
	
	

	public Todo(int id, String task, String description, Boolean completed, User user, String dueDate,
			String completedDate, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.task = task;
		this.description = description;
		this.completed = completed;
		this.user = user;
		this.dueDate = dueDate;
		this.completedDate = completedDate;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	

	public Todo() {
		super();
	}



	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public String getCompletedDate() {
		return completedDate;
	}

	public void setCompletedDate(String completedDate) {
		this.completedDate = completedDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public int getId() {
		return id;
	}



	@Override
	public String toString() {
		return "Todo [id=" + id + ", task=" + task + ", description=" + description + ", completed=" + completed
				+ ", user=" + user.getId() + ", dueDate=" + dueDate + ", completedDate=" + completedDate + ", createdAt="
				+ createdAt + ", updatedAt=" + updatedAt + "]";
	}

}
