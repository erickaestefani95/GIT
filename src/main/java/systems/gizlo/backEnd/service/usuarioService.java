/*
    Document   : usuarioService
    Created on : 04/08/2021, 08:00:00
    Author     : EB
 */

package systems.gizlo.backEnd.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import systems.gizlo.backEnd.repository.usuarioRepository;
import systems.gizlo.backEnd.usuarioPY.usuarios;

@Service
public class usuarioService {
    
    @Autowired
    private usuarioRepository usuarioRepository;
    
    public usuarios saveUser(usuarios usuario) {
        return usuarioRepository.save(usuario);
    }
    
    public usuarios consultId(usuarios usuario) {
        return usuarioRepository.findById(usuario.getId()).orElse(null);
    }
    
    public List<usuarios>consultUser() {
        return usuarioRepository.findAll();
    }
}
