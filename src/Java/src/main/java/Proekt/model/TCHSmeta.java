package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСмета
 */
@Entity(name = "IISProektТЧСмета")
@Table(schema = "public", name = "ТЧСмета")
public class TCHSmeta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СтоимСтроРаб")
    private Float стоимстрораб;

    @Column(name = "СтоимОборуд")
    private Float стоимоборуд;

    @Column(name = "СтоимМонРаб")
    private Float стоиммонраб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokSmeta")
    @Convert("DokSmeta")
    @Column(name = "ДокСмета", length = 16, unique = true, nullable = false)
    private UUID _doksmetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokSmeta", insertable = false, updatable = false)
    private DokSmeta doksmeta;


    public TCHSmeta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getСтоимСтроРаб() {
      return стоимстрораб;
    }

    public void setСтоимСтроРаб(Float стоимстрораб) {
      this.стоимстрораб = стоимстрораб;
    }

    public Float getСтоимОборуд() {
      return стоимоборуд;
    }

    public void setСтоимОборуд(Float стоимоборуд) {
      this.стоимоборуд = стоимоборуд;
    }

    public Float getСтоимМонРаб() {
      return стоиммонраб;
    }

    public void setСтоимМонРаб(Float стоиммонраб) {
      this.стоиммонраб = стоиммонраб;
    }


}