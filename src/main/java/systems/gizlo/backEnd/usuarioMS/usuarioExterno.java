/*
    Document   : usuarioExterno
    Created on : 04/08/2021, 08:00:00
    Author     : EB
    Description: Se agrego los atributos del usuario externo.
*/

package systems.gizlo.backEnd.usuarioMS;

//import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarioExterno")
public class usuarioExterno {
    
    @Id
    //@NotNull
    public String idUser;
    public String name;
    public String last;
    public String bachelorDegree;
    public String phone;
    public String email;
    
    public usuarioExterno(String idUser, String name, String last, String bachelorDegree, String phone, String email) {
        this.idUser = idUser;
        this.name = name;
        this.last = last;
        this.bachelorDegree = bachelorDegree;
        this.phone = phone;
        this.email = email;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
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

    public String getBachelorDegree() {
        return bachelorDegree;
    }

    public void setBachelorDegree(String bachelorDegree) {
        this.bachelorDegree = bachelorDegree;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}