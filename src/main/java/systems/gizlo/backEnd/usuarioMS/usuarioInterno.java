/*
    Document   : usuarioInterno
    Created on : 04/08/2021, 08:00:00
    Author     : EB
    Description: Se agrego los atributos del usuario interno.
*/

package systems.gizlo.backEnd.usuarioMS;

//import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarioInterno")
public class usuarioInterno {
    
    @Id
    //@NotNull
    public String idUser;
    public String name;
    public String last;
    public String area;
    public String gender;
    public String contracted;
    
    public usuarioInterno(String idUser, String name, String last, String area, String gender, String contracted) {
        this.idUser = idUser;
        this.name = name;
        this.last = last;
        this.area = area;
        this.gender = gender;
        this.contracted = contracted;
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

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getContracted() {
        return contracted;
    }

    public void setContracted(String contracted) {
        this.contracted = contracted;
    }

}