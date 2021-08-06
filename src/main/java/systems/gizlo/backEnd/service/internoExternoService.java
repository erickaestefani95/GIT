/*
    Document   : internoExternoService
    Created on : 04/08/2021, 08:00:00
    Author     : EB
*/

package systems.gizlo.backEnd.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import systems.gizlo.backEnd.repository.usuarioExternoRepository;
import systems.gizlo.backEnd.repository.usuarioInternoRepository;
import systems.gizlo.backEnd.usuarioMS.usuarioInterno;
import systems.gizlo.backEnd.usuarioMS.usuarioExterno;

@Service
public class internoExternoService {
    
    @Autowired
    private usuarioInternoRepository internoRepository;
    @Autowired
    private usuarioExternoRepository externoRepository;
    
    public usuarioInterno creatUserInterno(usuarioInterno userInterno) {
        return internoRepository.save(userInterno);
    }    
    
    public List<usuarioInterno>consultUserInterno() {
        return internoRepository.findAll();
    }
    
    public usuarioExterno creatUserExterno(usuarioExterno userExterno) {
        return externoRepository.save(userExterno);
    }    
    
    public List<usuarioExterno>consultUserExterno() {
        return externoRepository.findAll();
    }
}
