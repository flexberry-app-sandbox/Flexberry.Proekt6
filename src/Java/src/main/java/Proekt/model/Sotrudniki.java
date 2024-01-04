package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISProektСотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТабелНомер")
    private Integer табелномер;

    @Column(name = "ФИО")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpraDolzhnos")
    @Convert("SpraDolzhnos")
    @Column(name = "СпраДолжнос", length = 16, unique = true, nullable = false)
    private UUID _spradolzhnosid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpraDolzhnos", insertable = false, updatable = false)
    private SpraDolzhnos spradolzhnos;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТабелНомер() {
      return табелномер;
    }

    public void setТабелНомер(Integer табелномер) {
      this.табелномер = табелномер;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}