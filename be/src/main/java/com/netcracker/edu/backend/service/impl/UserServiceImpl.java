package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.User;
import com.netcracker.edu.backend.repository.RoleRepository;
import com.netcracker.edu.backend.repository.UserRepository;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public User getUserById(Long id) {
        User user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public User save(User user) {
        user.setRole(roleRepository.findByName("User"));
        return userRepository.save(user);
    }

    @Override
    public User changeUserRole(User user) {
        User usr = userRepository.findById(user.getId()).get();
        switch (user.getRole().getName()) {
            case "Admin":
                usr.changeRole(user.getRole());
                break;
            case "User":
                usr.changeRole(user.getRole());
                break;
            default:
                break;
        }
        return userRepository.save(usr);
    }

    @Override
    public void delete(long id) {
        userRepository.deleteById(id);
    }
}
