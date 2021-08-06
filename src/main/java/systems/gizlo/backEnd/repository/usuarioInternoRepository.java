/*
    Document   : repositorio usuario interno
    Created on : 04/08/2021, 08:00:00
    Author     : EB
*/

package systems.gizlo.backEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import systems.gizlo.backEnd.usuarioMS.usuarioInterno;

@Repository
public interface usuarioInternoRepository extends MongoRepository<usuarioInterno,String>{
    
}
