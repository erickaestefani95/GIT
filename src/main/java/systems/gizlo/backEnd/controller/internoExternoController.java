/*
    Document   : internoExternoController
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
import systems.gizlo.backEnd.service.internoExternoService;
import systems.gizlo.backEnd.usuarioMS.usuarioExterno;
import systems.gizlo.backEnd.usuarioMS.usuarioInterno;

@RestController
@RequestMapping(path = "/api/usuarioMS")
public class internoExternoController {

    @Autowired
    private internoExternoService userService;

    @PostMapping(value = "/creatUserInterno")
    public @ResponseBody
    usuarioInterno saveInterno(@RequestBody usuarioInterno userInterno) {
        return userService.creatUserInterno(userInterno);
    }

    @GetMapping("/getUserInterno")
    public @ResponseBody
    List<usuarioInterno> consultInterno() {
        return userService.consultUserInterno();
    }

    @PostMapping(value = "/creatUserExterno")
    public @ResponseBody
    usuarioExterno saveExterno(@RequestBody usuarioExterno userExterno) {
        return userService.creatUserExterno(userExterno);
    }
    
    @GetMapping("/getUserExterno")
    public @ResponseBody
    List<usuarioExterno> consultExterno() {
        return userService.consultUserExterno();

    }
}
