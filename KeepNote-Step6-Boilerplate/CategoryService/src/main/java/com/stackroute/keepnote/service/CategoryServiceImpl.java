package com.stackroute.keepnote.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.keepnote.exception.CategoryDoesNoteExistsException;
import com.stackroute.keepnote.exception.CategoryNotCreatedException;
import com.stackroute.keepnote.exception.CategoryNotFoundException;
import com.stackroute.keepnote.model.Category;
import com.stackroute.keepnote.repository.CategoryRepository;

/*
* Service classes are used here to implement additional business logic/validation 
* This class has to be annotated with @Service annotation.
* @Service - It is a specialization of the component annotation. It doesn't currently 
* provide any additional behavior over the @Component annotation, but it's a good idea 
* to use @Service over @Component in service-layer classes because it specifies intent 
* better. Additionally, tool support and additional behavior might rely on it in the 
* future.
* */
@Service
public class CategoryServiceImpl implements CategoryService {

	/*
	 * Autowiring should be implemented for the CategoryRepository. (Use
	 * Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */

	/*
	 * This method should be used to save a new category.Call the corresponding
	 * method of Respository interface.
	 */
	CategoryRepository categoryRepository;

	@Autowired
	public CategoryServiceImpl(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	public Category createCategory(Category category) throws CategoryNotCreatedException {

		Category category1 = categoryRepository.insert(category);
		if (category1 == null) {
			throw new CategoryNotCreatedException("CategoryNotCreatedException");
		} else
			return category1;
	}

	/*
	 * This method should be used to delete an existing category.Call the
	 * corresponding method of Respository interface.
	 */
	public boolean deleteCategory(String categoryId) throws CategoryDoesNoteExistsException {

		try {
			if (getCategoryById(categoryId) != null) {
				categoryRepository.delete(getCategoryById(categoryId));
				return true;
			}
		} catch (CategoryNotFoundException e) {

			throw new CategoryDoesNoteExistsException("CategoryDoesNoteExistsException");
		}
		return false;
	}

	/*
	 * This method should be used to update a existing category.Call the
	 * corresponding method of Respository interface.
	 */
	public Category updateCategory(Category category, String categoryId) {

		try {
			if (getCategoryById(categoryId) != null) {
				categoryRepository.save(category);
				return category;
			}
		} catch (CategoryNotFoundException e) {
			return null;
		}
		return null;
	}

	/*
	 * This method should be used to get a category by categoryId.Call the
	 * corresponding method of Respository interface.
	 */
	public Category getCategoryById(String categoryId) throws CategoryNotFoundException {

		Category c = null;
		try {
			c = categoryRepository.findById(categoryId).get();
			if (c == null) {
				throw new CategoryNotFoundException("CategoryNotFoundException");

			} else {
				return c;
			}

		} catch (Exception e) {
			throw new CategoryNotFoundException("CategoryNotFoundException");
		}
	}

	/*
	 * This method should be used to get a category by userId.Call the corresponding
	 * method of Respository interface.
	 */
	public List<Category> getAllCategoryByUserId(String userId) {

		List<Category> catList = categoryRepository.findAllCategoryByCategoryCreatedBy(userId);
		if (catList.isEmpty()) {
			return null;
		} else {
			return catList;
		}

	}

}
