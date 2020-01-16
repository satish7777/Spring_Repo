package com.stackroute.keepnote.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/*As in this class we are implementing Swagger So annotate the class with @Configuration and 
 * @EnableSwagger2
 * 
 */
@EnableSwagger2
@Configuration
public class SwaggerConfig {

	
	

	/*
	 * Annotate this method with @Bean . This method will return an Object of Docket.
	 * This method will implement logic for swagger
	 */
    
    @Bean
    public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.stackroute.keepnote.controller"))
				.paths(PathSelectors.regex("/.*")).build().apiInfo(apiEndPointsInfo());
    }
	private ApiInfo apiEndPointsInfo() {
		return new ApiInfoBuilder().title("Spring Boot REST API").description("User Authentication REST API")
				.contact(new Contact("User authentication", "http://localhost:8089/swagger-ui.html", "SattuTanu"))
				.license("Apache 2.0").licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html").version("7.7.7")
				.build();
	}
	
}
