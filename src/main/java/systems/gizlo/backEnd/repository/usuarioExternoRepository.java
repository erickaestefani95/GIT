/*
    Document   : repositorio usuario externo
    Created on : 04/08/2021, 08:00:00
    Author     : EB
*/

package systems.gizlo.backEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import systems.gizlo.backEnd.usuarioMS.usuarioExterno;

@Repository
public interface usuarioExternoRepository extends MongoRepository<usuarioExterno,String>{
    
}
