/*
    Document   : usuarios
    Created on : 04/08/2021, 08:00:00
    Author     : EB
*/

package systems.gizlo.backEnd.usuarioPY;

//import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuario")
public class usuarios {
    
    @Id
    //@NotNull
    public String id;
    public String name;
    public String last;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }
}
