package com.stackroute.keepnote.aspectj;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/* Annotate this class with @Aspect and @Component */

@Aspect
@Component
public class LoggingAspect {
	/*
	 * Write loggers for each of the methods of Note controller, any particular method
	 * will have all the four aspectJ annotation
	 * (@Before, @After, @AfterReturning, @AfterThrowing).
	 */
	Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

	@Pointcut(value = "execution(* com.stackroute.keepnote.controller.*.*(..))")
	public void controllerAspect() {
	}

	@Before("execution(* com.stackroute.keepnote.controller.*.*(..))")
	public void beforeAdvice(JoinPoint joinPoint) {
		// System.out.println(joinPoint.getSignature());
		logger.info("Inside Before ", joinPoint.getSignature());
	}

	@After("execution(* com.stackroute.keepnote.controller.*.*(..))")
	public void afterAdvice(JoinPoint joinPoint) {
		// System.out.println(joinPoint.getSignature());
		logger.info("Inside Before ", joinPoint.getSignature());
	}

	@AfterReturning(value = "execution(* com.stackroute.keepnote.controller.*.*(..))", returning = "result")
	public void afterReturningAdvice(JoinPoint jp, Object result) {
		// System.out.println("Inside the advice + controller"+result);
		logger.info("Inside the afterReturningAdvice");
	}

	@AfterThrowing(value = "execution(* com.stackroute.keepnote.controller.*.*(..))", throwing = "result")
	public void afterThrowingAdvice(JoinPoint jp, Object result) {
		// System.out.println("Inside the advice + controller"+result);
		logger.info("Inside the @AfterThrowing");

	}
}
