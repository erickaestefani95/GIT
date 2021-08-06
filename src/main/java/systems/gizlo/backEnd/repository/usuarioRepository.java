/*
    Document   : usuarioRepository
    Created on : 04/08/2021, 08:00:00
    Author     : EB
*/

package systems.gizlo.backEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import systems.gizlo.backEnd.usuarioPY.usuarios;

@Repository
public interface usuarioRepository extends MongoRepository<usuarios, String> {
   
}
