/*
    Document   : usuarioController
    Created on : 04/08/2021, 08:00:00
    Author     : EB
 */

package systems.gizlo.backEnd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import systems.gizlo.backEnd.service.usuarioService;
import systems.gizlo.backEnd.usuarioPY.usuarios;

@RestController
@RequestMapping(path = "/api/usuarioPY")
public class usuarioController {

    @Autowired
    private usuarioService usuarioService;

    @PostMapping(value = "/creatUser")
    public @ResponseBody
    usuarios save(@RequestBody usuarios usuario) {
        return usuarioService.saveUser(usuario);
    }

    @GetMapping(value = "/getUserId")
    public @ResponseBody
    usuarios consult(@RequestBody usuarios usuario) {
        return usuarioService.consultId(usuario);
    }

    @GetMapping(value = "/getUser")
    public @ResponseBody
    List<usuarios> consultAll() {
        return usuarioService.consultUser();
    }
}
