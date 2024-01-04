package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ОтПоВыпДогов
 */
@Entity(name = "IISProektОтПоВыпДогов")
@Table(schema = "public", name = "ОтПоВыпДогов")
public class OtPoVypDogov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СумКонечОстат")
    private Float сумконечостат;

    @Column(name = "Выполнение")
    private Float выполнение;


    public OtPoVypDogov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getСумКонечОстат() {
      return сумконечостат;
    }

    public void setСумКонечОстат(Float сумконечостат) {
      this.сумконечостат = сумконечостат;
    }

    public Float getВыполнение() {
      return выполнение;
    }

    public void setВыполнение(Float выполнение) {
      this.выполнение = выполнение;
    }


}