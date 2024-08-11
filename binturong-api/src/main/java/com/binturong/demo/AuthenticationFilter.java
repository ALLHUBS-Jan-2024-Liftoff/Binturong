package com.binturong.demo;

import com.binturong.demo.controllers.UserAuthController;
import com.binturong.demo.models.User;
import com.binturong.demo.repositorys.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;


public class AuthenticationFilter implements HandlerInterceptor {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserAuthController userAuthController;

    private static final List <String> whitelist = Arrays.asList("/user/login", "/user/register", "/user/logout");

    private static boolean isWhiteListed(String path) {
        for (String pathRoot: whitelist) {
            if (path.startsWith(pathRoot)) {
                return true;
            }
        }
        return false;
    }


    @Override
    public boolean preHandle (HttpServletRequest request,
                              HttpServletResponse response,
                              Object handler) throws IOException {


        // Sign in not needed for whitelisted pages
        if (isWhiteListed(request.getRequestURI())) {
            // true = request may proceed
            return true;
        }

        HttpSession session = request.getSession();
        User user = userAuthController.getUserFromSession(session);

        //Logged in
        if (user != null) {
            return true;
        }

        //NOT logged in
        if (request.getMethod().equals("OPTIONS")) {
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
    }
}